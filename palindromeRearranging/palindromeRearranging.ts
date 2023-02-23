export function palindromeRearranging(inputString: string): boolean {

    let charCounter = {};
    let singleChar = 0;

    for (let i = 0; i < inputString.length; i++) {
        if (charCounter.hasOwnProperty(inputString[i])) {
            charCounter[inputString[i]]++;
        } else {
            charCounter[inputString[i]] = 1;
        }
    }

    for (let i in charCounter) {
        if (charCounter[i] % 2 !== 0) {
            singleChar++;
        }                
    }
    
    return singleChar < 2 ? true : false;
}

console.log(palindromeRearranging('aabb'));