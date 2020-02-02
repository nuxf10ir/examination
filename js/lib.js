$.fn.preload = function (callback) {
    var length = this.length;
    var iterator = 0;

    return this.each(function () {
        var tmp = new Image();

        if (callback)
            tmp.onload = function () {
                ++iterator;
                if (iterator === length) {
                    callback()
                }
            };

        tmp.src = this;
    });
};

function pluralize(count, words) {
    var cases = [2, 0, 1, 1, 1, 2];
    return count + ' ' + words[ (count % 100 > 4 && count % 100 < 20) ? 2 : cases[ Math.min(count % 10, 5)] ];
}