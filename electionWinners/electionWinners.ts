export function electionsWinners(votes: number[], k: number): number {

    const sortedVotes: number[] = votes.sort();
    const maxVotes = sortedVotes[sortedVotes.length-1];
    
    if (sortedVotes[sortedVotes.length-1] === sortedVotes[sortedVotes.length-2]) {
        return -1;
    }

    let possibleWinnerCounter: number = 0;    
    for (let i = 0; i < sortedVotes.length; i++) {
        if (sortedVotes[i] + k > maxVotes) {
            possibleWinnerCounter++;
        }
    }
    
    return possibleWinnerCounter;
}

console.log(electionsWinners([2, 3, 5, 2], 3));