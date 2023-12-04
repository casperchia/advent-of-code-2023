import {
  generateCards,
  getMatches,
  getPoints,
  getTotalPoints,
  solve,
} from "./day4a";
import { readInput } from "../util";

export const testCards = generateCards(
  readInput("src/day4/day4-test.input.txt"),
);

describe("day4 part a", () => {
  test("getMatches", () => {
    expect(getMatches(testCards[0])).toBe(4);
    expect(getMatches(testCards[1])).toBe(2);
    expect(getMatches(testCards[2])).toBe(2);
    expect(getMatches(testCards[3])).toBe(1);
    expect(getMatches(testCards[4])).toBe(0);
    expect(getMatches(testCards[5])).toBe(0);
  });

  test("getPoints", () => {
    expect(getPoints(0)).toBe(0);
    expect(getPoints(1)).toBe(1);
    expect(getPoints(2)).toBe(2);
    expect(getPoints(3)).toBe(4);
    expect(getPoints(4)).toBe(8);
    expect(getPoints(5)).toBe(16);
  });

  test("getTotalPoints", () => {
    expect(getTotalPoints(testCards)).toBe(13);
  });

  test("solve", () => {
    console.log(solve());
  });
});
