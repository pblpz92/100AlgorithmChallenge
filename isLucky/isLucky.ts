export function isLucky(n: number): boolean {
    
    let firstHalfSum: number = 0;
    let secondHalfSum: number = 0;

    for (let i = 0; i < n.toString().length; i++) {
        if (i < n.toString().length/2) {
            firstHalfSum += parseInt(n.toString()[i]);
        } else {
            secondHalfSum += parseInt(n.toString()[i]);
        }
    }

    
    return firstHalfSum === secondHalfSum;
}

console.log(isLucky(1230));
console.log(isLucky(239017));
console.log(isLucky(550145));