import factory from './factory';

export default class HotReplaceDirective {
    constructor($parse) {
        this.restrict = 'A';
        this.require  = 'ngModel';
        this.link = this.__linkUnboundPartial.bind(this, $parse);
    }

    _getInputSelection(el) {
        let start = 0, end = 0;

        if (angular.isNumber(el.selectionStart) && angular.isNumber(el.selectionEnd)) {
            start = el.selectionStart;
            end   = el.selectionEnd;
        } else {
            let range = document.selection.createRange();

            if (range && range.parentElement() === el) {
                let len = el.value.length,
                    normalized = el.value.replace(/\r\n/g, '\n');

                let textInputRange = el.createTextRange();

                textInputRange.moveToBookmark(range.getBookmark());

                let endRange = el.createTextRange();

                endRange.collapse(false);

                if (textInputRange.compareEndPoints('StartToEnd', endRange) > -1) {
                    start = end = len;
                } else {
                    start = -textInputRange.moveStart('character', -len);
                    start += normalized.slice(0, start).split('\n').length - 1;

                    if (textInputRange.compareEndPoints('EndToEnd', endRange) > -1) {
                        end = len;
                    } else {
                        end = -textInputRange.moveEnd('character', -len);
                        end += normalized.slice(0, end).split('\n').length - 1;
                    }
                }
            }
        }

        return { start, end };
    }

    _wrapWith(el, before, after) {
        if (!angular.isDefined(after)) {
            after = before;
        }

        let sel = this._getInputSelection(el),
            val = el.value,
            str = val.slice(sel.start, sel.end);

        return val.slice(0, sel.start) + before + str + after + val.slice(sel.end);
    }

    __onKeyDownPartial(setter, el, e) {
        if (e.ctrlKey && e.keyCode === 73) {
            console.log(setter)
            setter(this._wrapWith(el, '_'));
        }
    }

    __linkUnboundPartial($parse, scope, el, attrs, ngModelCtrl) {
        let getter = $parse(attrs['ngModel']),
            setter = getter.assign;

        document.onkeydown = function (e) {
            if (e.ctrlKey || e.metaKey) {
                switch (e.keyCode) {
                    case 66:
                        setter(scope, this._wrapWith(el[0], '*'));
                        scope.$digest();
                        break;
                    case 73:
                        setter(scope, this._wrapWith(el[0], '_'));
                        scope.$digest();
                        break;
                        case 75:
                            let link = prompt('Enter link', 'http://');
                            setter(scope, this._wrapWith(el[0], '[', '](' + link + ')'));
                            scope.$digest();
                            break;
                }
            }
        }.bind(this);
    }
}

HotReplaceDirective.$inject = ['$parse'];

HotReplaceDirective.factory = factory;
