import { getNextNumber, parseInput } from "./day9a";

export const solve = () => {
  const input = parseInput("src/day9/day9.input.txt");
  return input
    .map((numbers) => numbers.reverse())
    .reduce((sum, current) => sum + getNextNumber(current), 0);
};
