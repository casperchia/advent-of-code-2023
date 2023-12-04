import { getSum, solve } from "./day3b";
import { getGears } from "./day3b";
import { readInput } from "../util";
import { testFilePath } from "./day3a.test";
import { generateGrid } from "./day3a";

describe("day3 part b", () => {
  test("getGears", () => {
    expect(getGears(generateGrid(readInput(testFilePath)))).toEqual([
      [467, 35],
      [755, 598],
    ]);
  });

  test("getSum", () => {
    expect(getSum(readInput(testFilePath))).toBe(467835);
  });

  test("solve", () => {
    console.log(solve());
  });
});
