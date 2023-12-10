import { solve } from "./day9b";
import { getNextNumber } from "./day9a";

describe("day9 part b", () => {
  test("getNextNumber", () => {
    expect(getNextNumber([0, 0, 0, 0, 0].reverse())).toEqual(0);
    expect(getNextNumber([2, 2, 2, 2, 2].reverse())).toEqual(2);
    expect(getNextNumber([1, 3, 6, 10, 15, 21].reverse())).toEqual(0);
    expect(getNextNumber([10, 13, 16, 21, 30, 45].reverse())).toEqual(5);
  });

  test("solve", () => {
    console.log(solve());
  });
});
