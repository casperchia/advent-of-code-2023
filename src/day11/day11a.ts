import { getPairCombinations, readInput, transpose } from "../util";

export type Legend = "#" | ".";
export type Grid = Legend[][];
export type Point = [number, number];

export const parseInput = (input: string): Grid => {
  return input
    .split("\n")
    .map((line) => line.split("").filter((s) => s !== "\r") as Legend[]);
};

export const expandGrid = (grid: Grid): Grid => {
  let newGrid = JSON.parse(JSON.stringify(grid)) as Grid;

  let width = grid[0].length;
  let rowsAdded = 0;
  grid.forEach((row, i) => {
    if (row.every((l) => l === ".")) {
      const emptyRow = Array(width).fill(".");
      newGrid.splice(i + rowsAdded, 0, emptyRow);
      rowsAdded++;
    }
  });

  grid = transpose(grid);
  newGrid = transpose(newGrid);
  width = newGrid[0].length;
  rowsAdded = 0;
  grid.forEach((row, i) => {
    if (row.every((l) => l === ".")) {
      const emptyRow = Array(width).fill(".");
      newGrid.splice(i + rowsAdded, 0, emptyRow);
      rowsAdded++;
    }
  });

  newGrid = transpose(newGrid);

  return newGrid;
};

export const getDistance = ([x1, y1]: Point, [x2, y2]: Point): number => {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
};

export const findLegends = (grid: Grid, legend: Legend): Point[] => {
  const points: Point[] = [];
  grid.forEach((row, y) => {
    row.forEach((l, x) => {
      if (l === legend) points.push([x, y]);
    });
  });
  return points;
};

export const solve = () => {
  let grid = parseInput(readInput("src/day11/day11.input.txt"));
  grid = expandGrid(grid);
  const galaxies = findLegends(grid, "#");
  return getPairCombinations(galaxies)
    .map(([p1, p2]) => getDistance(p1, p2))
    .reduce((a, b) => a + b, 0);
};
