import { forEachChild, getTsBuildInfoEmitOutputFilePath } from "typescript";

export function addTwoDigits(n: any): number {

    const splitted : string[] = n.toString().split('');    
    let total: number = 0;

    splitted.forEach(num => {
        total += parseInt(num);
    });

    return total;
}

console.log(addTwoDigits(29));