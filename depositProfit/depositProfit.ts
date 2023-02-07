export function depositProfit(deposit: number, rate: number, threshold: number): number {

    let yearCounter: number = 0;
    
    while (deposit < threshold) {
        deposit += deposit * (rate/100);        
        yearCounter++;
    }

    return yearCounter;
}

console.log(depositProfit(100, 20, 170));
