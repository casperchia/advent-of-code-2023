import { readFileSync } from "fs";

export function readInput(filepath: string): string {
  return readFileSync(filepath).toString().trim();
}

export function isNumber(input: string): boolean {
  return !isNaN(Number(input));
}
