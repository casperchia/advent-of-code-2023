import { readInput } from "../util";

export type Legend = "|" | "-" | "L" | "J" | "7" | "F" | "." | "S";
export type Direction = "Up" | "Down" | "Left" | "Right";
export type Grid = Legend[][];
export type Point = [number, number];

export const parseInput = (filepath: string): Grid => {
  return readInput(filepath)
    .split("\n")
    .map((line) => line.split("").filter((s) => s !== "\r") as Legend[]);
};

export const getNextDirection = (
  startDirection: Direction,
  legend: Legend,
): Direction => {
  if (legend === ".") return null;
  if (legend === "S") return startDirection;
  if (startDirection === "Up") {
    if (legend === "|") return "Up";
    if (legend === "7") return "Left";
    if (legend === "F") return "Right";
  } else if (startDirection === "Down") {
    if (legend === "|") return "Down";
    if (legend === "J") return "Left";
    if (legend === "L") return "Right";
  } else if (startDirection === "Left") {
    if (legend === "-") return "Left";
    if (legend === "L") return "Up";
    if (legend === "F") return "Down";
  } else if (startDirection === "Right") {
    if (legend === "-") return "Right";
    if (legend === "J") return "Up";
    if (legend === "7") return "Down";
  }
  return null;
};

export const getNextPoint = (
  currentPoint: Point,
  direction: Direction,
): Point => {
  const [x, y] = currentPoint;
  if (direction === "Up") return [x, y - 1];
  if (direction === "Down") return [x, y + 1];
  if (direction === "Left") return [x - 1, y];
  if (direction === "Right") return [x + 1, y];
  return null;
};

export const isPointInGrid = (point: Point, grid: Grid): boolean => {
  const [x, y] = point;
  return x >= 0 && y >= 0 && y < grid.length && x < grid[y].length;
};

export const getStartingPoint = (grid: Grid): Point => {
  const y = grid.findIndex((row) => row.some((l) => l === "S"));
  const x = grid[y].findIndex((l) => l === "S");
  return [x, y];
};

export const getPath = (
  grid: Grid,
  [x, y]: Point,
  direction: Direction,
): Direction[] => {
  const path: Direction[] = [];

  while (true) {
    const nextDirection = getNextDirection(direction, grid[y][x]);
    if (!nextDirection) break;

    const [nextX, nextY] = getNextPoint([x, y], nextDirection);
    if (!isPointInGrid([nextX, nextY], grid)) break;

    x = nextX;
    y = nextY;
    direction = nextDirection;
    path.push(nextDirection);

    if (grid[y][x] === "S") return path;
  }

  return [];
};

export const solve = () => {
  const grid = parseInput("src/day10/day10.input.txt");
  const startingPoint = getStartingPoint(grid);
  let path = getPath(grid, startingPoint, "Up");
  if (path.length === 0) path = getPath(grid, startingPoint, "Down");
  if (path.length === 0) path = getPath(grid, startingPoint, "Left");
  return path.length / 2;
};
