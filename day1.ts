import { logAnswer, readInput } from "./util";

(async function main() {
    const input = await readInput('./input/day1.txt');
    
    // Part 1
    let numbers: [number[], number[]] = [[], []];
    input.forEach((row, i) => {
        let [left, right] = row.split('   ');
        console.log(left, right)
        numbers[0][i] = parseInt(left);
        numbers[1][i] = parseInt(right);
    });
    
    numbers[0].sort((a, b) => a - b);
    numbers[1].sort((a, b) => a - b);
    
    let sum = 0;
    
    for (let i = 0; i < numbers[0].length; i++) {
        let left = numbers[0][i];
        let right = numbers[1][i];

    
        sum += Math.max(left, right) - Math.min(left, right);
    }
    
    logAnswer(1, 1, sum);

    // Part 2
    sum = 0;

    let memo = {};
    numbers[1].forEach(v => memo[v] ? memo[v]++ : memo[v] = 1);

    for (let i = 0; i < numbers[0].length; i++) {
        let left = numbers[0][i];

        let score = memo[left] ? left * memo[left] : 0;
        sum += score;
    }
    logAnswer(1, 2, sum);
})();