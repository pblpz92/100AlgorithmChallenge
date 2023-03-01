export function stringsConstruction(a: string, b: string): number {    
    
    const aCounter = counter(a);    
    const bCounter = counter(b);
    const counts: number[] = [];
    
    for (let char in aCounter) {
        if (bCounter.hasOwnProperty(char)) {
            counts.push(bCounter[char] / aCounter[char]);
        } else {
            return 0;
        }
    }
    
    return Math.floor(Math.min(...counts));
}

function counter(stringToCount: string) {

    let charCounter = {};    

    stringToCount.split("").forEach(element => {
        if (charCounter.hasOwnProperty(element)) {
            charCounter[element]++;
        } else {
            charCounter[element] = 1;
        }
    });

    return charCounter;
}

console.log(stringsConstruction('abc', 'abccba'));
