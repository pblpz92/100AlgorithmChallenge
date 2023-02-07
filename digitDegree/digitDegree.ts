export function digitDegree(n: number): number {

    let count: number = 0;
    let currentNumber: number = n;

    if (n <= 9) {
        return count;
    } else {
        while (true) {
            count++;
            currentNumber = getDigit(currentNumber);

            if (currentNumber <= 9) {
                break;
            }
        }
    }
    return count;
}

function getDigit(num: number) {
    const nums = num.toString().split('').map((element) => parseInt(element));
    
     return nums.reduce((a, b) => {
        return a + b;
    });
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));