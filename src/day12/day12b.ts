import { getReport, Report } from "./day12a";
import { readInput } from "../util";

export const unfold = (input: string) => {
  const [statusStr, groupStr] = input.split(" ");
  const status5 = [];
  const groups5 = [];
  for (let i = 0; i < 5; i++) {
    status5.push(statusStr);
    groups5.push(...groupStr.split(",").map(Number));
  }
  const unfoldedStatus = status5.join("?");
  const unfoldedGroups = groups5.join(",");
  return `${unfoldedStatus} ${unfoldedGroups}`;
};

export const parseInput = (filename: string): Report[] => {
  return readInput(filename)
    .split("\n")
    .map((line) => line.trim())
    .map(unfold)
    .map(getReport);
};

export const getNumberOfSolutions = ({ status, groups }: Report): number => {
  status.slice(1, status.length);
  return 0;
};

export const solve = () => {
  // return parseInput("src/day12/day12.input.txt");
  // .map(getNumberOfSolutions)
  // .reduce((a, b) => a + b, 0);
};
