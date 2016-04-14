export default function() {
    function escapeHTML(str) {
        let div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

    function isNotWithinTag(str, whole) {
        return whole
            ? str + '(?!<\/.+>)'
            : str + '(?!<.+>)([^' + str + ']*)' + str + '(?!">)(?!<\/.+>)';
    }

    function setNewlines(str) {
        return str.replace(/(?:\r\n|\r|\n)/, '<br />');
    }

    let isItalic = new RegExp(isNotWithinTag('_')),
        isBold   = new RegExp(isNotWithinTag('\\*')),
        isMono   = new RegExp(isNotWithinTag('`')),
        isLink   = new RegExp(isNotWithinTag('\\[([\\wа-я]+)\\]\\(([^\\)\\]]*)\\)', true));

    let matchers = [isItalic, isBold, isMono, isLink];

    function getMatch(str) {
        let first = null;

        matchers
            .map((exp) => {
                let m = exp.exec(str);
                return m === null ? -1 : m.index;
            })
            .reduce((p, c, i) => {
                if (c !== -1 && (p === -1 || (p !== -1 && c < p))) {
                    first = matchers[i];
                    return c;
                }

                return p;
            }, -1);

        return first;
    }

    function getWrapper(match) {
        switch (match) {
            case isItalic:
                return '<em>$1</em>';
            case isBold:
                return '<strong>$1</strong>';
            case isMono:
                return '<code>$1</code>';
            case isLink:
                return '<a href="$2">$1</a>';
            default:
                return '';
        }
    }

    return function (input, config) {
        if (input === '' || !angular.isDefined(input)) {
            return '';
        }

        input = escapeHTML(input);
        input = input.replace(/(?:\r\n|\r|\n)/g, '<br />');

        if (config.typographyfy) {
            input = input.replace(/"(.+)"/g, '&laquo;$1&raquo;');
            input = input.replace(/\s-\s/g, ' &mdash; ');
        }

        let match = getMatch(input);

        while (match !== null) {
            input = input.replace(match, getWrapper(match));
            match = getMatch(input);
        }

        return input;
    };
}
