import { getNextNumber, solve } from "./day9a";

describe("day9 part a", () => {
  test("getNextNumber", () => {
    expect(getNextNumber([0, 0, 0, 0, 0])).toEqual(0);
    expect(getNextNumber([2, 2, 2, 2, 2])).toEqual(2);
    expect(getNextNumber([1, 3, 6, 10, 15, 21])).toEqual(28);
    expect(getNextNumber([10, 13, 16, 21, 30, 45])).toEqual(68);
  });

  test("solve", () => {
    console.log(solve());
  });
});
