import { readInput } from "../util";

export const parseInput = (filepath: string): number[][] => {
  return readInput(filepath)
    .split("\n")
    .map((line) => line.split(" ").map((x) => Number(x)));
};

export const getNextNumber = (input: number[]): number => {
  const diffs = input.reduce((res, current, index, input) => {
    if (index === 0) return res;
    const previous = input[index - 1];
    res.push(current - previous);
    return res;
  }, [] as number[]);

  if (diffs.every((x) => x === 0)) return input[0];

  const nextNumber = getNextNumber(diffs);
  return nextNumber + input[input.length - 1];
};

export const solve = () => {
  const input = parseInput("src/day9/day9.input.txt");
  return input.reduce((sum, current) => sum + getNextNumber(current), 0);
};
