import { isNumber, readInput } from "../util";

export const getSum = (input: string) =>
  getPartNumbers(generateGrid(input)).reduce((a, b) => a + b);

export const generateGrid = (input: string): string[][] =>
  input
    .split("\n")
    .map((l) => l.trim())
    .map((l) => l.split(""));

const hasAdjacentSymbol = (x: number, y: number, grid: string[][]): boolean => {
  const adjacentSymbols = [
    grid[y - 1]?.[x - 1],
    grid[y - 1]?.[x],
    grid[y - 1]?.[x + 1],
    grid[y]?.[x - 1],
    grid[y]?.[x + 1],
    grid[y + 1]?.[x - 1],
    grid[y + 1]?.[x],
    grid[y + 1]?.[x + 1],
  ];
  const nonDigitOrPeriod = /[^\d.]/;
  return adjacentSymbols.some((s) => s?.match(nonDigitOrPeriod));
};

export const getPartNumbers = (grid: string[][]): number[] => {
  const partNumbers: number[] = [];
  let currentNumber: string = "";
  let hasAdjacent: boolean = false;
  const pushIfValid = () => {
    if (currentNumber.length > 0 && hasAdjacent) {
      partNumbers.push(Number(currentNumber));
    }
    currentNumber = "";
    hasAdjacent = false;
  };
  grid.forEach((row, y) => {
    row.forEach((char, x) => {
      if (isNumber(char)) {
        currentNumber += char;
        hasAdjacent ||= hasAdjacentSymbol(x, y, grid);
      } else {
        pushIfValid();
      }
    });
    pushIfValid();
  });
  return partNumbers;
};

export const solve = () => getSum(readInput("src/day3/day3.input.txt"));
