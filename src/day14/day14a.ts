import { readInput, rotateClockwise, rotateCounterClockwise } from "../util";

export type Legend = "#" | "." | "O";
export type Grid = Legend[][];
export type Point = [number, number];

export const parseInput = (input: string): Grid => {
  return input
    .split("\n")
    .map((line) => line.trim())
    .map((line) => line.split("") as Legend[]);
};

export const tiltUp = (grid: Grid) => {
  grid = rotateClockwise(grid);
  grid.forEach((row, y) => {
    grid[y] = shiftRight(row);
  });
  return rotateCounterClockwise(grid);
};

export const shiftRoundRocksRight = (input: Legend[]) => {
  if (input.includes("#")) throw new Error("Cannot shift cube rocks");
  const roundRocks = input.filter((l) => l === "O");
  const emptySpaces = input.filter((l) => l === ".");
  roundRocks.unshift(...emptySpaces);
  return roundRocks;
};

export const shiftRight = (input: Legend[]) => {
  return input
    .join("")
    .split("#")
    .map((groupsBetweenCubes) =>
      shiftRoundRocksRight(groupsBetweenCubes.split("") as Legend[]).join(""),
    )
    .join("#")
    .split("") as Legend[];
};

export const getTotalLoad = (grid: Grid) => {
  return tiltUp(grid).reduce((total, row, i) => {
    const multiplier = grid.length - i;
    const numberOfRoundedRocks = row.filter((l) => l === "O").length;
    return total + numberOfRoundedRocks * multiplier;
  }, 0);
};

export const solve = () => {
  const grid = parseInput(readInput("src/day14/day14.input.txt"));
  return getTotalLoad(grid);
};
