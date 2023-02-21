export function maxMultiple(divisor: number, bound: number): number {

    let maxMultiple: number = 0;

    for (let i = 1; i < bound; i++) {
        if (i % divisor === 0 && i > maxMultiple) {                        
            maxMultiple = i;
        }
    }

    return maxMultiple;
}

console.log(maxMultiple(3,10));