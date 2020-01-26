class Driver {
    run () {
        console.error('This method is not implemented')
    }
}

class ChromeDriver extends Driver {
    constructor() {
        super();
        this.name = 'ChromeDriver';
    }

    run() {
        console.log(this.name, 'started')
    }
}

class FireFoxDriver extends Driver {
    constructor() {
        super();
        this.name = 'FireFoxDriver'
    }

    run() {
        console.log(this.name, 'is running')
    }

}

const baseDriver = new Driver();
const chromeDriver = new ChromeDriver();
const fireFoxDriver = new FireFoxDriver();

baseDriver.run();
chromeDriver.run();
fireFoxDriver.run();