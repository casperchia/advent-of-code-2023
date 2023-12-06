import { getNumbers, getPossibleSolutions } from "./day6a";
import { readInput } from "../util";

export const parseInput = (filepath: string) => {
  const [timeString, distanceString] = readInput(filepath).split("\n");
  const time = +getNumbers(timeString).join("");
  const distance = +getNumbers(distanceString).join("");
  return [time, distance];
};
export const solve = () => {
  const [time, distance] = parseInput("src/day6/day6.input.txt");
  return getPossibleSolutions(time, distance);
};
