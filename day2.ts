import { logAnswer, readInput } from "./util";

(async function main() {
    const input = await readInput('./input/day2.txt');

    // Part 1
    let sum = 0;
    let unsafeRecords: number[][] = [];

    outer:
    for (let i = 0; i < input.length; i++) {
        let row = input[i].split(' ').map(v => parseInt(v));
        let increasing = row[0] < row[1];
        let decreasing = row[0] > row[1];

        for (let j = 0; j < row.length - 1; j++) {
            if (increasing) {
                if (row[j] >= row[j + 1]) {
                    unsafeRecords.push(row);
                    continue outer;
                }
            } else if (decreasing) {
                if (row[j] <= row[j + 1]) {
                    unsafeRecords.push(row);
                    continue outer;
                }
            } else {
                unsafeRecords.push(row);
                continue outer;
            }
        }

        for (let i = 0; i < row.length - 1; i++) {
            if (Math.abs(row[i] - row[i + 1]) > 3) {
                unsafeRecords.push(row);
                continue outer;
            }
        }

        sum++;
    }

    logAnswer(2, 1, sum);

    // Part 2
    let sum2 = 0;
    for (let i = 0; i < unsafeRecords.length; i++) {
        let row = unsafeRecords[i];
        let increasing = row[0] < row[1];
        let decreasing = row[0] > row[1];

        outer2:
        for (let j = 0; j < row.length; j++) {
            let newRow = row.slice(0, j).concat(row.slice(j + 1));

            for (let k = 0; k < newRow.length - 1; k++) {
                if (increasing) {
                    if (newRow[k] >= newRow[k + 1]) {
                        continue outer2;
                    }
                } else if (decreasing) {
                    if (newRow[k] <= newRow[k + 1]) {
                        continue outer2;
                    }
                } else {
                    continue outer2;
                }
            }

            for (let k = 0; k < newRow.length - 1; k++) {
                if (Math.abs(newRow[k] - newRow[k + 1]) > 3) {
                    continue outer2;
                }
            }

            sum2++;
        }
    }

    logAnswer(2, 2, sum2 + sum);
})();