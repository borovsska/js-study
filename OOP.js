class Dog {
    #name;
    #prop = 'This is private prop';
    prop = 'This is public prop';
    width = 42;

    calculate () {
        return this.width * 2;
    }

    bark () {
        console.log(this.#name, 'Bark!');
    }

    constructor(name) {
        this.#name = name;
    }
}

const dog1 = new Dog('Dog1');
const dog2 = new Dog('Dog2');

dog1.bark();
dog2.bark();

class WhiteDog extends Dog {
    color = 'white';
}

class BlackDog extends Dog {
    constructor(name) {
        super(name);
        this.color = 'black';
    }
}

const whiteDog = new WhiteDog('White Bob');
const blackDog = new BlackDog('Black Sparrow');

whiteDog.bark();
blackDog.bark();
