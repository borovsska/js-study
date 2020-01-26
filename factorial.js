function factorialLoop(number) {
    let result = 1;

    while (number > 0) {
        result = result * number;
        number --;
    }
    return result;
}

console.assert(factorialLoop(3) === 6, '3!');
console.assert(factorialLoop(5) === 120, '5!');


function factorialRecursion(number) {
    if (number <= 2) {
        return number;
    }

    return number * factorialRecursion(number - 1);
}

console.assert(factorialRecursion(5) === 120, '5!');
console.assert(factorialRecursion(3) === 6, '3!');
console.assert(factorialRecursion(11) === 39916800, '11!');


