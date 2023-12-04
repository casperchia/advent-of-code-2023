import { isNumber, readInput } from "../util";
import { generateGrid } from "./day3a";

export const getGears = (grid: string[][]): [number, number][] => {
  let asteriskParts: number[][][] = [];
  let currentNumber: string = "";
  let adjacentAsteriskPositions: [number, number][] = [];

  const pushPartNumber = () => {
    if (currentNumber.length > 0) {
      adjacentAsteriskPositions.forEach(([x, y]) => {
        asteriskParts[y] ??= [];
        asteriskParts[y][x] ??= [];
        asteriskParts[y][x].push(Number(currentNumber));
      });
      currentNumber = "";
      adjacentAsteriskPositions = [];
    }
  };

  grid.forEach((row, y) => {
    row.forEach((char, x) => {
      if (isNumber(char)) {
        currentNumber += char;
        getAdjacentAsteriskPositions(x, y, grid).forEach((tuple) => {
          if (!containsTuple(adjacentAsteriskPositions, tuple)) {
            adjacentAsteriskPositions.push(tuple);
          }
        });
      } else {
        pushPartNumber();
      }
    });
    pushPartNumber();
  });

  return asteriskParts.flat().filter((asterisk) => asterisk.length === 2) as [
    number,
    number,
  ][];
};

const containsTuple = (tuples: [number, number][], tuple: [number, number]) =>
  tuples.some(([x, y]) => x === tuple[0] && y === tuple[1]);

const getAdjacentAsteriskPositions = (
  x: number,
  y: number,
  grid: string[][],
) => {
  const adjacentAsteriskPositions: [number, number][] = [];
  for (let row = y - 1; row <= y + 1; row++) {
    for (let col = x - 1; col <= x + 1; col++) {
      if (grid[row]?.[col] === "*") {
        adjacentAsteriskPositions.push([col, row]);
      }
    }
  }
  return adjacentAsteriskPositions;
};

export const getSum = (input: string) =>
  getGears(generateGrid(input)).reduce(
    (sum, [part1, part2]) => sum + part1 * part2,
    0,
  );

export const solve = () => getSum(readInput("src/day3/day3.input.txt"));
