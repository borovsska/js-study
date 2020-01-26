function timesStringAppears (listOfStrings, specificString) {
    let countResult = 0;

    for (let string of listOfStrings) {
        if (string === specificString) {
            countResult++;
        }
    }
    return countResult;
}

function timesStringAppears2 (listOfStrings, specificString) {
    const filteredList = listOfStrings.filter((string) => {
        return string === specificString;
    });

    return filteredList.length;
}

console.assert(timesStringAppears(['abc', 'def', 'abc', 'ghi'], 'abc') === 2, 'case1 failed');
console.assert(timesStringAppears2(['abc', 'abc', 'abc', 'ghi'], 'abc') === 3, 'case2 failed');