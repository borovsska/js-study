function Solution(){
    const stack = [];
    const queue = [];

    return {
        pushCharacter(char) {
            stack.push(char);
        },
        enqueueCharacter(char) {
            queue.unshift(char);
        },
        popCharacter() {
            return stack.pop();
        },
        dequeueCharacter() {
            return queue.pop();
        }
    };
}

class SolutionClass {
    stack = [];
    queue = [];

    pushCharacter(char) {
        this.stack.push(char);
    }
    enqueueCharacter(char) {
        this.queue.unshift(char);
    }
    popCharacter() {
        return this.stack.pop();
    }
    dequeueCharacter() {
        return this.queue.pop();
    }
}

function test(string, isPalindromeExpected) {
    const solution = new Solution(); // equals to `const solution = Solution()`;
    // const solution = new SolutionClass();
    let isPalindrome = true;

    if(!string) {
        isPalindrome = false;
    }

    for(let i = 0; i < string.length; i++) {
        const character = string[i];

        if(/[a-zA-Z0-9]/.test(character)) {
            solution.pushCharacter(character);
            solution.enqueueCharacter(character);
        }
    }

    for(let i = 0; i < string.length; i++) {
        if (solution.popCharacter() !== solution.dequeueCharacter()) {
            isPalindrome = false;
        }
    }

    console.assert(
        isPalindrome === isPalindromeExpected,
        `The string "${string}" should${isPalindromeExpected ? ' ' : ' not '}be a palindrome`
    );
}

test('', false);
test('yes', false);
test('racecar', true);
test('no lemon, no melon', true);