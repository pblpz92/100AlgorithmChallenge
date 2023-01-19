import { isTemplateSpan } from "typescript";

export function composeRanges(nums: number[]): string[] {

    let item: string = "";    
    let result: string[] = [];    
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i]+1 === nums[i+1]) {
            count++;            
        } else {
            if (count != 0) {
                result.push(nums[i-count].toString() + "->" + nums[i].toString());
            } else {
                result.push(nums[i].toString());
            }
            count = 0;
        }        
    }
    
    return result;
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
console.log(composeRanges([-1, 0, 2, 6, 7, 9, 10, 11]));