export function differentSymbolsNaive(s: string): number {

    const differentCharacters: string[] = [];
    const input = s.split("");

    for (let i = 0; i < input.length; i++) {
        if (!differentCharacters.includes(input[i])) {
            differentCharacters.push(input[i]);
        }
    }
    
    return differentCharacters.length;
}

console.log(differentSymbolsNaive('cabca'));
