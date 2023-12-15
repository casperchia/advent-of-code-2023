import { getTotalLoad, Grid, parseInput, tiltUp } from "./day14a";
import { readInput, rotateClockwise } from "../util";

export const cycle = (grid: Grid): Grid => {
  grid = tiltUp(grid);
  grid = rotateClockwise(grid);
  grid = tiltUp(grid);
  grid = rotateClockwise(grid);
  grid = tiltUp(grid);
  grid = rotateClockwise(grid);
  grid = tiltUp(grid);
  grid = rotateClockwise(grid);
  return grid;
};

export const spinCycle = (grid: Grid, cycles: number): Grid => {
  for (let i = 0; i < cycles; i++) {
    grid = cycle(grid);
  }

  console.log(grid);
  return grid;
};

export const solve = () => {
  const grid = parseInput(readInput("src/day14/day14.input.txt"));
  return getTotalLoad(spinCycle(grid, 1000));
};
