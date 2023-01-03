export function alphabetSubsequence(s: string): boolean {

    const splittedWord:  string[] = s.split("");
    let charCodeToCompare = s[0].charCodeAt(0);

    for (let i = 1; i < splittedWord.length; i++) {
        if (splittedWord[i].charCodeAt(0) <= charCodeToCompare) {
            return false;
        }
        charCodeToCompare = splittedWord[i].charCodeAt(0);
    }
    
    return true;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))