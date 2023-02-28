export function properNounCorrection(noun: string): string {
    return noun.substring(0,1).toUpperCase().concat(noun.substring(1).toLowerCase());
}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));