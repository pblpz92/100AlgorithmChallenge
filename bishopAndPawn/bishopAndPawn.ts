import { createLogicalAnd } from "typescript";

export function bishopAndPawn(bishop: string, pawn: string): boolean {
    
    const bishopRow: number = parseInt(bishop.charAt(1));
    const bishopColumn = columnToNumber(bishop.charAt(0));

    const pawnRow: number = parseInt(pawn.charAt(1));
    const pawncolumn = columnToNumber(pawn.charAt(0));

    if (Math.abs(bishopRow - bishopColumn) == Math.abs(pawnRow - pawncolumn)) {
        return true;
    }

    if (bishopRow + bishopColumn == pawnRow + pawncolumn) {
        return true;
    }

    return false;
}

function columnToNumber(column: String): number {
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

console.log(bishopAndPawn('a1', 'c3'));
console.log(bishopAndPawn('d4', 'b6'));
console.log(bishopAndPawn('a1', 'b1'));
console.log(bishopAndPawn('a3', 'b4'));
console.log(bishopAndPawn('c7', 'g3'));
console.log(bishopAndPawn('c5', 'b6'));