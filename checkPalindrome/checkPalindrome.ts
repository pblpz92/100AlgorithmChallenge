export function checkPalindrome(inputString: string): boolean {
    return inputString.split('').reverse().join('').toLowerCase() === inputString.toLocaleLowerCase();
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
