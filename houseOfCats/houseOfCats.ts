export function houseOfCats(legs: number): number[] {
    const humans: number[] = [];
    let catLegs = 4;

    if (legs == 2) {
        if (legs == 2) {
             return [1];        
        }             
    }

    for (let i = legs; i > 0; i -= 4) {
        humans.push(i/2);
    }

    return humans.sort();
}

console.log(houseOfCats(12));
console.log(houseOfCats(6));
console.log(houseOfCats(2));
