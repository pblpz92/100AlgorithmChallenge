export function tasksTypes(deadlines: number[], day: number): number[] {

    let result = 0;
    let todayTasks: number = 0;
    let thisWeekTasks: number = 0;
    let laterTasks: number = 0;

    for (let i = 0; i < deadlines.length; i++) {
        if (deadlines[i] <= day) {
            todayTasks++;
        } else if (deadlines[i] > day && deadlines[i] <= day + 7) {
            thisWeekTasks++;
        } else {
            laterTasks++;
        }
    }

    return [todayTasks, thisWeekTasks, laterTasks]
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));
