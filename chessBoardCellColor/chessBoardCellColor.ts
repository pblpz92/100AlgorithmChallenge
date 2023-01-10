import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

export function chessBoardCellColor(cell1: string, cell2: string): boolean {
    
    let cell1Value = columnToNumber(cell1.charAt(0)) + parseInt(cell1.charAt(1));
    let cell2Value = columnToNumber(cell2.charAt(0)) + parseInt(cell2.charAt(1));

    return (cell1Value + cell2Value)%2 === 0 ? true : false;
}

function columnToNumber(column: String) {
    switch(column.toLowerCase()) {
        case ('a'):
            return 1;
            break;
        case ('b'):
            return 2;
            break;
        case ('c'):
            return 3;
            break;
        case ('d'):
            return 4;
            break;
        case ('e'):
            return 5;
            break;
        case ('f'):
            return 6;
            break;
        case ('g'):
            return 7;
            break;
        case ('h'):
            return 8;
            break;
        default:
            return -1;
    }
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
console.log(chessBoardCellColor('F6', 'B3'));
