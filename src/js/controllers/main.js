export default class MainCtrl {
    constructor($http) {
        this.token = '';

        this.message = {
            chat_id: '',
            text: '',
            parse_mode: 'Markdown',
            disable_web_page_preview: false,
            disable_notification: false
        };

        this.send = this.__sendPartial.bind(this, $http);
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

    __sendPartial($http) {
        $http({
            method: 'POST',
            url:  this._getUrl('sendMessage'),
            data: this._serialize(this.message),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }
}

MainCtrl.$inject = ['$http'];

MainCtrl.API = 'https://api.telegram.org/bot';
