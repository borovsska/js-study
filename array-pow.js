function pow(arrayOfNumbers, power) {
    return arrayOfNumbers.map(function (number) {
        return Math.pow(number, power)
    });
}

function compareArrays (arr1, arr2) {
    return String(arr1) === String(arr2);
}

console.assert(
    compareArrays(
        pow([1, 3], 2),
        [1, 9]
    ),
    'case1 failed'
);

console.assert(
    compareArrays(
        pow([2, 3, -4], 3),
        [8, 27, -64]
    ),
    'case2 failed'
);