export function longestDigitsPrefix(inputString: string): string {    
    let result = "";

    for (let i = 0; i < inputString.length; i++) {
        if ((inputString.charCodeAt(i) >= 48 && inputString.charCodeAt(i) <= 57)) {            
            result = result.concat(inputString.charAt(i));
        } else {
            return result;
        }
    }

    return result;
}

console.log(longestDigitsPrefix('123aa1'));