export function sumOddFibonacciNums(num: number): number {

    let fibo: number[] = [1, 1];
    let result = 0;

    while (fibo[0] + fibo[1] < num) {
        
        if ((fibo[0] + fibo[1]) % 2 !== 0) {
            result += fibo[0] + fibo[1];
            console.log(fibo[0] + fibo[1]);
        }
        
        fibo[2] = fibo[0] + fibo[1];
        fibo.shift();
    }

    
    return result + 2;
}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));