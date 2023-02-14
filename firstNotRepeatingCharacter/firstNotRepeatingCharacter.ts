export function firstNotRepeatingCharacter(s: string): string {

    const splittedWord = s.split('');

    for (let i = 0; i < splittedWord.length; i++) {
        if (splittedWord.indexOf(splittedWord[i]) === splittedWord.lastIndexOf(splittedWord[i])) {
            return splittedWord[i];
        }
    }

    return "_";
}

console.log(firstNotRepeatingCharacter('abacaba'));
console.log(firstNotRepeatingCharacter('abacabadc'));


