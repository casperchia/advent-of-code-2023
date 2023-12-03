import { getPower, solve } from "./day2b";
import { testGames } from "./day2a.test";

describe("day2 part b", () => {
  test("getPower", () => {
    expect(getPower(testGames[0])).toBe(48);
    expect(getPower(testGames[1])).toBe(12);
    expect(getPower(testGames[2])).toBe(1560);
    expect(getPower(testGames[3])).toBe(630);
    expect(getPower(testGames[4])).toBe(36);
  });

  test("solve", () => {
    console.log(solve());
  });
});
