export function matrixElementsSum(matrix: any[][]): number {

    const hauntedColumns: number[] = [];
    let totalCost: number = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {                                
                hauntedColumns.push(j);
            } else if (matrix[i][j] !== 0 && !hauntedColumns.includes(j)) {
                totalCost += matrix[i][j];
            }
        }
    }

    return totalCost;
}

console.log(matrixElementsSum(
    [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]
));
