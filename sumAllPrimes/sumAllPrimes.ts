export function sumAllPrimes(num: number): number {

    let result: number = 0;

    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            result += i;
        }
    }

    return result;
}

function isPrime(n: number) {

    for (let i = 2 ; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));