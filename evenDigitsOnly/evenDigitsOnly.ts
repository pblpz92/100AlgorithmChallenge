export function evenDigitsOnly(n: number): boolean {

    let numbertoString = n.toString();

    for (let i = 0; i < numbertoString.length; i++) {
        if (+numbertoString[i] % 2 !== 0) {            
            return false;
        }
    }
    
    return true;
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));