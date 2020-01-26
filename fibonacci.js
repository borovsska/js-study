function fibonacciLoop(number) {
    let prev = 0;
    let next = 1;

    for(let i = 0; i < number; i++){
        const oldValueOfNext = next;

        next = prev + next;
        prev = oldValueOfNext;
    }

    return prev;
}

console.assert(fibonacciLoop(3) === 2, '3!');
console.assert(fibonacciLoop(5) === 5, '5!');
console.assert(fibonacciLoop(9) === 34, '9!');
console.assert(fibonacciLoop(11) === 89, '11!');
console.assert(fibonacciLoop(77) === 5527939700884757, '77!');


function fibonacciRecursion(number) {
    if (number === 0) {
        return 0;
    }
    if (number <= 2) {
        return 1;
    }
    return fibonacciRecursion(number - 1) + fibonacciRecursion(number - 2);
}

console.assert(fibonacciRecursion(3) === 2, '3!');
console.assert(fibonacciRecursion(5) === 5, '5!');
console.assert(fibonacciRecursion(9) === 34, '9!');
console.assert(fibonacciRecursion(11) === 89, '11!');


