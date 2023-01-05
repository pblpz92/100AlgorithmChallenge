export function arrayPreviousLess(items: number[]): number[] {

    let result: number[] = [];
    let currentValue: number;
    let lowerValue: boolean;

    for (let i = items.length -1; i >= 0; i--) {
        lowerValue = false;
        currentValue = items[i];
        
        for (let j = i-1; j >= 0 && !lowerValue; j--) {                    
            if (items[j] < currentValue) {
                result.unshift(items[j]);                
                lowerValue = true;
            }
        }
        if (!lowerValue) {
            result.unshift(-1);
        }
    }
    return result;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
console.log(arrayPreviousLess([0, 9, 4, 11, 9]));
console.log(arrayPreviousLess([52, 95, 21, 3, 55]));
console.log(arrayPreviousLess([69, 1, 200, 350, 60]));