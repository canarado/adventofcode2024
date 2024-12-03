import { promises as fsPromises } from "fs";

export async function readInput(file: string): Promise<string[]> {
    const data = await fsPromises.readFile(file, 'utf-8');
    return data.split('\n');
}

export function logAnswer(day: number, part: number, answer: any, startHrTime?: [number, number]) {
    let log = `Day ${day}, Part ${part}: ${answer}`;
    if (startHrTime) {
        const endHrTime = process.hrtime(startHrTime);
        log += ` in ${endHrTime[0]}s ${endHrTime[1] / 1000000}ms`;
    }
    console.log(log);
}