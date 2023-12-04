import { generateGrid, getPartNumbers, getSum, solve } from "./day3a";
import { readInput } from "../util";

export const testFilePath = "src/day3/day3-test.input.txt";

describe("day3 part a", () => {
  test("getPartNumbers", () => {
    const grid = generateGrid(readInput(testFilePath));
    expect(getPartNumbers(grid)).toEqual(
      expect.arrayContaining([467, 35, 633, 617, 592, 755, 664, 598]),
    );
  });

  test("getSum", () => {
    expect(getSum(readInput(testFilePath))).toBe(4361);
  });

  test("solve", () => {
    console.log(solve());
  });
});
