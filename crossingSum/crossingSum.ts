export function crossingSum(matrix: number[][], row: number, column: number): number {

    let totalSum: number = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (row === i) {
                totalSum+= matrix[i][j];
            }
            if (column === j) {
                totalSum+= matrix[i][j];
            }
        }
    }
    
    return totalSum - matrix[row][column];
}

 console.log(crossingSum([  [1, 1, 1, 1], 
                            [2, 2, 2, 2], 
                            [3, 3, 3, 3]], 1, 3));