export function containsDuplicates(a: number[]): boolean {
    const sortedArray: number[] = a.sort();
    
    for (let i = 0; i < sortedArray.length-1; i++) {
        if (sortedArray[i] === sortedArray[i+1]) {
            return true;
        }
    }

    return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
