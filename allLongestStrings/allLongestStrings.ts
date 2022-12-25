export function allLongestStrings(inputArray: string[]): string[] {
    
    let maxLength: number = 0;
    let longestWords: string[] = [];

    for (let i = 0; i < inputArray.length; i++) {
        maxLength = maxLength < inputArray[i].length ? inputArray[i].length : maxLength;        
    }

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length == maxLength) {
            longestWords.push(inputArray[i]);
        }
    }
    
    return longestWords;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));