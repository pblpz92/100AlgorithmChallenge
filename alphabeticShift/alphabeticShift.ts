import { split } from "ts-node";

export function alphabeticShift(inputString: string): string {

    const splittedLetters: string[] = inputString.split("");
    let newWord: string = "";

    splittedLetters.forEach(element => {
        if (element.charCodeAt(0) === 122 ) {
            newWord = newWord.concat('a');
        } else {
            newWord = newWord.concat(String.fromCharCode(element.charCodeAt(0)+1));
        }
    });

    return newWord;    
}

console.log(alphabeticShift('crazy'));