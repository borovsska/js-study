function miniMaxSum(arr) {
    const minNumber = Math.min(...arr);
    const maxNumber = Math.max(...arr);
    let sumMinNumbers = 0;
    let sumMaxNumbers = 0;

    if(minNumber === maxNumber) {
        sumMinNumbers = minNumber * (arr.length - 1);
        sumMaxNumbers = maxNumber * (arr.length - 1);

        console.log(sumMinNumbers, sumMaxNumbers);
        return;
    }

    for (const number of arr) {
        if (number >= minNumber && number < maxNumber) {
            sumMinNumbers = sumMinNumbers + number;
        }

        if (number <= maxNumber && number > minNumber) {
            sumMaxNumbers = sumMaxNumbers + number;
        }
    }

    console.log(sumMinNumbers, sumMaxNumbers);
}

miniMaxSum([5, 5, 5, 5, 5]);
miniMaxSum([1, 2, 3, 4, 5]);