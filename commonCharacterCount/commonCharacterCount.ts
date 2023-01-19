export function commonCharacterCount(s1: string, s2: string): number {

    const firstString: string[] = s1.split('');
    const secondString: string[] = s2.split('');
    let counter: number = 0;
    
    for (let i = 0; i < firstString.length; i++) {
        let letterToCheck = firstString[i];        

        for (let j = 0; j < secondString.length; j++) {
            let isSameLetter = secondString[j];
            if (letterToCheck === isSameLetter) {
                counter++;
                secondString.splice(j, 1);                
                break;
            }
        }
    }

    return counter;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));
