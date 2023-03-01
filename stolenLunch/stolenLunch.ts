export function stolenLunch(note: string): string {
    let firstPartResult: string = "";
    let codeResult: string = "";
    let alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let firstPart: string = note.split(":")[0];
    let code: string = note.split(":")[1].trim();

    for (let i = 0; i < firstPart.length; i++) {
        if (isNaN(Number.parseInt(firstPart[i]))) {
            firstPartResult = firstPartResult.concat(firstPart[i]);
        } else {
            firstPartResult = firstPartResult.concat(alphabet[firstPart[i]]);
        }
    }

    for (let i = 0; i < code.length; i++) {
        codeResult = codeResult.concat(numbers[alphabet.indexOf(code[i])].toString());
    }

    return firstPartResult.concat(": ").concat(codeResult);
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));