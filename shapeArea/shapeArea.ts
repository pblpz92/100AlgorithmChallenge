export function shapeArea(n: number): number {

    let result: number = 0;

    if (n == 1) {
        return 1;
    } else {
        for (let i = n; i >= 1; i--) {
            result += i*2-1;
        }
    }
    
    return result * 2 - (n*2 - 1);
}

console.log(shapeArea(2));//5
console.log(shapeArea(3));//13