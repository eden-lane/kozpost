export default function () {
    let Fn = this;

    let directive = function () {
        let args = [null].concat(Array.prototype.slice.call(arguments));
        return new (Fn.bind.apply(Fn, args));
    };

    directive.$inject = Fn.$inject;

    return directive;
};
