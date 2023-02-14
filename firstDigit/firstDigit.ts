export function firstDigit(inputString: string): string {
    const digits: string[] = ['0','1','2','3','4','5','6','7','8','9']
    const inputStringSplitted = inputString.split("");

    for (let i = 0; i < inputStringSplitted.length; i++) {
        if (digits.includes(inputStringSplitted[i])) {
            return inputStringSplitted[i];
        }
    }
    
    return "";
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
console.log(firstDigit('ss'));
