import { readFileSync } from "fs";

export function readInput(filepath: string): string {
  return readFileSync(filepath).toString().trim();
}

export function isNumber(input: string): boolean {
  return input.trim() !== "" && !isNaN(Number(input));
}

export function transpose<T>(matrix: T[][]) {
  return matrix[0].map((col, i) => matrix.map((row) => row[i]));
}

export function getPairCombinations<T>(values: T[]): [T, T][] {
  const combinations: [T, T][] = [];
  values.forEach((v1, i) => {
    values.slice(i + 1).forEach((v2) => {
      combinations.push([v1, v2]);
    });
  });
  return combinations;
}
