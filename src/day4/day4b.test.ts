import { getCardCounts, getTotalCards, solve } from "./day4b";
import { testCards } from "./day4a.test";

describe("day4 part b", () => {
  test("getCardCounts", () => {
    expect(getCardCounts(testCards)).toEqual([1, 2, 4, 8, 14, 1]);
  });

  test("getTotalCards", () => {
    expect(getTotalCards(testCards)).toBe(30);
  });

  test("solve", () => {
    console.log(solve());
  });
});
