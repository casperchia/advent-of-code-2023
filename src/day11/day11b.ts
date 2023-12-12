import { getPairCombinations, readInput, transpose } from "../util";
import { findLegends, getDistance, parseInput, Point } from "./day11a";

export const getIndexOfEmptyRows = (grid: string[][]): number[] => {
  return grid
    .map((row) => row.every((l) => l === "."))
    .map((val, i) => (val ? i : null))
    .filter((val) => val !== null);
};

export const getDistanceWithMultiple = (
  [x1, y1]: Point,
  [x2, y2]: Point,
  emptyRows: number[],
  emptyColumns: number[],
  multiple: number,
): number => {
  const rowsInBetween = emptyRows.filter(
    (i) => (i < y1 && i > y2) || (i > y1 && i < y2),
  ).length;
  const columnsInBetween = emptyColumns.filter(
    (i) => (i < x1 && i > x2) || (i > x1 && i < x2),
  ).length;
  const extraRows = rowsInBetween + columnsInBetween;
  const extraDistance = extraRows * multiple - extraRows;
  return getDistance([x1, y1], [x2, y2]) + extraDistance;
};

export const solve = () => {
  let grid = parseInput(readInput("src/day11/day11.input.txt"));
  const transposedGrid = transpose(grid);
  const emptyRows = getIndexOfEmptyRows(grid);
  const emptyColumns = getIndexOfEmptyRows(transposedGrid);
  // grid = expandGrid(grid);
  const galaxies = findLegends(grid, "#");
  return getPairCombinations(galaxies)
    .map(
      ([p1, p2]) =>
        getDistanceWithMultiple(p1, p2, emptyRows, emptyColumns, 1000000),
      // getDistance(p1, p2),
    )
    .reduce((a, b) => a + b, 0);
};
