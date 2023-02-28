export function ratingThreshold(threshold: number, ratings: number[][]): number[] {

    let result: number[] = [];

    for (let i = 0; i < ratings.length; i++) {
        let totalRating = 0;

        for (let j = 0; j < ratings[i].length; j++) {
            totalRating += ratings[i][j];

            if (j == ratings[i].length-1 && totalRating/ratings[i].length < threshold) {  
                    result.push(i);
            }
        }
    }

    return result;
}

console.log(ratingThreshold(3.5, 
    [[3, 4],
    [3, 3, 3, 4],    
     [4]]));