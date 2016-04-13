export default function() {
    function escapeHTML(str) {
        let div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

    function wrapWith(str, char, tag) {
        let exp = new RegExp('\\' + char + '(.*)\\' + char);
        return str.replace(exp, '<' + tag + '>$1</' + tag + '>');
    }

    return function (input, config) {
        if (input === '' || !angular.isDefined(input)) {
            return '';
        }

        let result;

        result = escapeHTML(input);
        result = result.replace(/(?:\r\n|\r|\n)/g, '<br />');
        result = result.replace(/`([^\.]*)`/g, '<code>$1</code>');
        result = result.replace(/_([^_]*)_/g, '<em>$1</em>');
        result = result.replace(/\*([^\*]*)\*/g, '<strong>$1</strong>');
        result = result.replace(/\[(\w+)\](\([^\)\]]*\))/g, '<a href="$2">$1</a>');

        return result;
    };
}
