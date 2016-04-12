export default class MainCtrl {
    constructor($http) {
        this.token = '';

        this.message = {
            chat_id: '',
            text: '',
            disable_web_page_preview: false,
            disable_notification: false
        };

        this.send = this.__sendPartial.bind(this, $http);
    }

    _getUrl(method) {
        if (!angular.isString(method) || method === '') {
            throw new TypeErorr('provide a method');
        }

        return MainCtrl.API + this.token + '/' + method;
    }

    __sendPartial($http) {
        var url = this._getUrl('sendMessage');

        $http.post(url, this.message);
    }
}

MainCtrl.$inject = ['$http'];

MainCtrl.API = 'https://api.telegram.org/bot';
