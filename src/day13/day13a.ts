import { readInput, transpose } from "../util";

export type Legend = "#" | ".";
export type Grid = Legend[][];

export const linesToGrid = (lines: string[]): Grid => {
  return lines.map((line) => line.split("") as Legend[]);
};

export const parseInput = (input: string): Grid[] => {
  const groups: string[][] = [];
  let currentGroup: string[] = [];
  input
    .split("\n")
    .map((line) => line.trim())
    .forEach((line) => {
      if (line === "") {
        if (currentGroup.length > 0) {
          groups.push(currentGroup);
          currentGroup = [];
        }
      } else {
        currentGroup.push(line);
      }
    });

  if (currentGroup.length > 0) {
    groups.push(currentGroup);
  }
  return groups.map(linesToGrid);
};

/**
 * Returns left and right halves of the input when checking for a vertical mirror at the given index.
 * @param row
 * @param index
 */
export const getWindow = <T>(row: T[], index: number): [T[], T[]] => {
  if (index === 0) throw new Error("Index must be > 0");
  let left: T[] = row.slice(0, index);
  let right: T[] = row.slice(index, row.length);

  if (left.length > right.length) {
    const diff = left.length - right.length;
    left = left.slice(diff, left.length);
  } else if (left.length < right.length) {
    const diff = right.length - left.length;
    right = right.slice(0, right.length - diff);
  }

  return [left, right];
};

/**
 * Returns true if there is a vertical mirror before the given index.
 * @param row
 * @param index
 */
export const isMirrorAt = (row: Legend[], index: number) => {
  if (index === 0)
    throw new Error("Index must be > 0, mirror cannot be at the beginning");

  let [left, right] = getWindow(row, index);
  right = right.reverse();
  return left.every((l, i) => l === right[i]);
};

/**
 * Returns the index of the column after the vertical mirror begins in the given grid.
 * Returns 0 if there is no vertical mirror.
 * @param grid
 */
export const getIndexOfVerticalMirror = (grid: Grid) => {
  const row = grid[0];
  const width = row.length;
  for (let i = 1; i < width; i++) {
    if (isMirrorAt(row, i) && grid.every((row) => isMirrorAt(row, i))) return i;
  }
  return 0;
};

export const getIndexOfHorizontalMirror = (grid: Grid) => {
  return getIndexOfVerticalMirror(transpose(grid));
};

export const solve = () => {
  const grids = parseInput(readInput("src/day13/day13.input.txt"));

  const columns = grids.reduce(
    (columns, grid) => columns + getIndexOfVerticalMirror(grid),
    0,
  );
  const rows = grids.reduce(
    (rows, grid) => rows + getIndexOfHorizontalMirror(grid),
    0,
  );
  console.log(columns);
  console.log(rows);
  return columns + rows * 100;
};
