function swap (stringOfFruits) {
    const arrayOfFruits = stringOfFruits.split(', ');
    const arrayOfFruits1 = arrayOfFruits.slice();
    const lastItemIndex = arrayOfFruits.length - 1;

    arrayOfFruits.splice(1, 1, arrayOfFruits[lastItemIndex]);
    arrayOfFruits.splice(lastItemIndex, 1, arrayOfFruits1[1]);

    return arrayOfFruits.join(', ');
}

function swap2 (stringOfFruits) {
    const arrayOfFruits = stringOfFruits.split(', ');
    const lastItem = arrayOfFruits.pop();

    arrayOfFruits.push(arrayOfFruits[1]);
    arrayOfFruits[1] = lastItem;

    return arrayOfFruits.join(', ');
}

function swap3 (stringOfFruits) {
    const arrayOfFruits = stringOfFruits.split(', ');
    const lastItemIndex = arrayOfFruits.length - 1;
    const lastItem = arrayOfFruits[lastItemIndex];

    arrayOfFruits[lastItemIndex] = arrayOfFruits[1];
    arrayOfFruits[1] = lastItem;

    return arrayOfFruits.join(', ');
}

function swap4 (stringOfFruits) {
    // ['apple', 'banana', ['carrot', 'date'], 'strawberry']
    const [first, second, ...fruits, last] = stringOfFruits.split(', ');

    return [first, last, ...fruits, second].join(', ');
}

console.assert(swap('apple, banana, carrot, date') === 'apple, date, carrot, banana', 'invalid result #1');
console.assert(swap('apple, banana, carrot') === 'apple, carrot, banana', 'invalid result #2');
console.assert(swap('apple, banana, carrot, date, strawberry') === 'apple, strawberry, carrot, date, banana', 'invalid result #3');
