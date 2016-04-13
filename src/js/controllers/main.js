export default class MainCtrl {
    constructor($http) {
        this.loading = false;

        this.message = {
            chat_id: '',
            text: '',
            parse_mode: 'Markdown',
            disable_web_page_preview: false,
            disable_notification: false
        };

        var cache = localStorage.getItem(MainCtrl.CACHE);

        if (cache) {
            var parsed = JSON.parse(cache);

            this.token = parsed.token;
            this.user  = parsed.user;

            this.message.chat_id = parsed.channel || '';
        } else {
            this.token = '';
            this.user  = null;
        }

        this.error = false;

        this.result = null;

        this._postForm = this.__postFormPartial.bind(this, $http);

        this.login = this.__loginPartial.bind(this, $http);
    }

    _serialize(data) {
        if (!angular.isObject(data)) {
            return data === null ? '' : data.toString();
        }

        let buffer = [];

        for (var name in data) {
            if (!data.hasOwnProperty(name)) {
                continue;
            }

            let value = data[name];

            buffer.push(
                encodeURIComponent(name) + '=' + encodeURIComponent(value === null ? '' : value)
            );
        }

        return buffer.join('&').replace(/%20/g, '+');
    }

    _getUrl(method) {
        if (!angular.isString(method) || method === '') {
            throw new TypeErorr('provide a method');
        }

        return MainCtrl.API + this.token + '/' + method;
    }

    _onLogin(data) {
        this.user = data.result;

        localStorage.setItem(MainCtrl.CACHE, JSON.stringify({
            token: this.token,
            user:  this.user
        }));
    }

    _onPublished(data) {
        var cache = JSON.parse(localStorage.getItem(MainCtrl.CACHE));

        cache.channel = this.message.chat_id;

        localStorage.setItem(MainCtrl.CACHE, JSON.stringify(cache));

        this.result = {
            success: true,
            title: 'Post successful!'
        };
    }

    __loginPartial($http) {
        this.loading = true;

        $http.get(this._getUrl('getMe'))
            .success(this._onLogin.bind(this))
            .error(() => this.error = true)
            .finally(() => this.loading = false);
    }

    __postFormPartial($http, method, data) {
        return $http({
            method: 'POST',
            url:  this._getUrl(method),
            data: this._serialize(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }

    getMdConfig() {
        return {

        };
    }

    logout() {
        this.token = '';
        this.user  = null;
        localStorage.removeItem(MainCtrl.CACHE);
    }

    send() {
        this.loading = true;

        this._postForm('sendMessage', this.message)
            .success(this._onPublished.bind(this))
            .error(() => this.result = {
                success: false,
                title: 'Post failed!',
                text: 'Check if the channel exists & your bot is added as an administrator'
            })
            .finally(() => this.loading = false);
    }
}

MainCtrl.$inject = ['$http'];

MainCtrl.CACHE = 'kozpost:cache';
MainCtrl.API   = 'https://api.telegram.org/bot';
