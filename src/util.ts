import { readFileSync } from "fs";

export function readInput(filepath: string): string {
  return readFileSync(filepath).toString().trim();
}
