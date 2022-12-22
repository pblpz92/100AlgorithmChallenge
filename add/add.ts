export function add(param1: number, param2: number): number {
    return param1 + param2;
}

export function add2(...param1: number[]): number {
    let totalSum: number = 0;

    param1.forEach((num) =>{
        totalSum += num;
    });

    return totalSum;        
}

console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1,2,3,4,5));
console.log(add2(2,3));
