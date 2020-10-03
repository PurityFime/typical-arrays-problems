
exports.min = function min (array) {
    if (Math.min.apply(Math, array) === Infinity || Math.min.apply(Math, array) === NaN) {
        return 0;
    }
    else {
        return Math.min.apply(Math, array);
    }
}

exports.max = function max (array) {
    if (Math.max.apply(Math, array) === -Infinity || Math.max.apply(Math, array) === NaN) {
        return 0;
    }
    else {
        return Math.max.apply(Math, array);
    }
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    else {
        let sum = 0;
        for (let i = 0; i < array.length; i++){            
            sum += array[i];
        }
        return sum / array.length;
    }
}
