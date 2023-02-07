import { createLogicalAnd, FileWatcherEventKind } from "typescript";

export function convertString(s: string, t: string): boolean {
    
    let trashWord: string[] = s.split("");
    let cleanWord: string[] = t.split("");
    let lastIndex: number = 0;    

    if (t.length === 0) return false;

    for (let i = 0; i < cleanWord.length; i++) {        
        if (trashWord.indexOf(cleanWord[i], lastIndex) !== -1) {
            lastIndex = trashWord.indexOf(cleanWord[i]);            
        } else {                        
            return false;
        }
    }
    return true;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));