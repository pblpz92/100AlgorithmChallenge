export function isTandemRepeat(inputString: string): boolean {    
    return inputString.slice(0, inputString.length/2) === inputString.slice(inputString.length/2);
}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))
