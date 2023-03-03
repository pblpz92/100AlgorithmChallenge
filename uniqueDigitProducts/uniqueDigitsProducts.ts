export function uniqueDigitProducts(a: number[]): number {
    
    const distinctProducts: number[] = [];

    for (let i = 0; i < a.length; i++) {
        let currentItems: string[] = a[i].toString().split("");
        
        if (currentItems.length == 1) {
            if (!distinctProducts.includes(Number.parseInt(currentItems[0]))) {
                distinctProducts.push(Number.parseInt(currentItems[0]));
            }
        } else {
            let currentProduct: number = Number.parseInt(currentItems[0]);                       

            for (let j = 1; j < currentItems.length; j++) {                
                currentProduct *= Number.parseInt(currentItems[j]);
            }
            
            if (!distinctProducts.includes(currentProduct)) {
                distinctProducts.push(currentProduct);
            }            
        }
    }

    return distinctProducts.length;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));