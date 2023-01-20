export function containsCloseNums(nums: number[], k: number): boolean {
    let outerPosition: number;
    let innerPosition: number;

    for (let i = 0; i < nums.length-1; i++) {
        outerPosition = i;        
        
        for (let j = i+1; j < nums.length; j++) {
            innerPosition = j;
            if (nums[i] === nums[j]) {                
                if (Math.abs(i-j) <= k) {                             
                    return true;
                }
            }
        }
    }
    return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));