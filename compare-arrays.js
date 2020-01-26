function arrayMatches(arr1, arr2) {
    let result = [];

    for(let i = 0; i < arr1.length; i++) {
        const char = arr1[i];

        if (!result.includes(char) && arr2.includes(char)) {
            result.push(char);
        }
    }
    return result;
}

function compareArrays (arr1, arr2) {
    return String(arr1) === String(arr2);
}

function test (input1, input2, result, failureMessage) {
    console.assert(compareArrays(arrayMatches(input1, input2), result), failureMessage);
}

test(
    ['c', 'a', 'b', 'c'],
    ['b', 'c', 'd'],
    ['c', 'b'],
    '1st case failed'
);
test(
    ['b', 'a', 'b'],
    ['b', 'c'],
    ['b'],
    '2nd case failed'
);
test(
    ['b', 'a', 'b'],
    ['b', 'c', 'a', 'f'],
    ['b', 'a'],
    '3rd case failed'
);