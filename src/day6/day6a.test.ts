import { getPossibleSolutions, solve } from "./day6a";

describe("day6 part a", () => {
  test("getPossibleSolutions", () => {
    expect(getPossibleSolutions(7, 9)).toBe(4);
    expect(getPossibleSolutions(15, 40)).toBe(8);
    expect(getPossibleSolutions(30, 200)).toBe(9);
  });

  test("solve", () => {
    console.log(solve());
  });
});
