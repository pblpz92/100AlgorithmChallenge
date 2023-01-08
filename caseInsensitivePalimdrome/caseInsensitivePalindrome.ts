export function isCaseInsensitivePalindrome(inputString: string): boolean {
    return inputString.split('').reverse().join('').toLowerCase() === inputString.toLocaleLowerCase();
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));