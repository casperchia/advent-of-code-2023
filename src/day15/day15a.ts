import { readInput } from "../util";

export const hash = (input: string): number => {
  return input.split("").reduce((hash, char) => {
    hash += char.charCodeAt(0);
    hash *= 17;
    hash %= 256;
    return hash;
  }, 0);
};

export const getHashSum = (input: string): number => {
  return input
    .split(",")
    .map(hash)
    .reduce((sum, hash) => sum + hash, 0);
};

export const solve = () => {
  console.log(hash("rn"));
  console.log(hash("cm"));
  console.log(hash("qp"));
  console.log(hash("pc"));
  console.log(hash("ab"));
  return getHashSum(readInput("src/day15/day15.input.txt"));
};
