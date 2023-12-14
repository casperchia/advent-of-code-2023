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

/**
 * Generates all combinations of the given elements with the given length.
 * @param elements
 * @param length
 */
export function generateCombinations<T>(elements: T[], length: number): T[][] {
  if (length === 1) return elements.map((e) => [e]);

  const combinations: T[][] = [];
  elements.forEach((e, i) => {
    const subCombinations = generateCombinations(
      elements.slice(i + 1),
      length - 1,
    );
    subCombinations.forEach((c) => combinations.push([e, ...c]));
  });

  return combinations;
}

/**
 * Generates all permutations of the given elements with the given length.
 * @param elements
 * @param length
 */
export function generatePermutations<T>(elements: T[], length: number): T[][] {
  if (length <= 0) return [];

  const permutations: T[][] = [];

  const permute = (arr: T[], m: T[] = []) => {
    if (m.length === length) {
      permutations.push(m);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      permute(arr, m.concat(arr[i]));
    }
  };

  permute(elements);
  return permutations;
}
