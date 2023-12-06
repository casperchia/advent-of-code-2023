import { getDestination, getLocation, parseInput, solve } from "./day5a";
import { readInput } from "../util";

export const testInput = parseInput(readInput("src/day5/day5-test.input.txt"));

describe("day5 part a", () => {
  test("getDestination", () => {
    expect(getDestination(0, [[11, 1, 1]])).toBe(0);
    expect(getDestination(1, [[11, 1, 1]])).toBe(11);
    expect(getDestination(2, [[11, 1, 1]])).toBe(2);
    expect(getDestination(3, [[11, 1, 1]])).toBe(3);

    expect(getDestination(1, [[11, 1, 3]])).toBe(11);
    expect(getDestination(2, [[11, 1, 3]])).toBe(12);
    expect(getDestination(3, [[11, 1, 3]])).toBe(13);
    expect(getDestination(4, [[11, 1, 3]])).toBe(4);
  });

  test("getLocation", () => {
    expect(getLocation(79, testInput.maps)).toBe(82);
    expect(getLocation(14, testInput.maps)).toBe(43);
    expect(getLocation(55, testInput.maps)).toBe(86);
    expect(getLocation(13, testInput.maps)).toBe(35);
  });

  test("solve", () => {
    console.log(solve());
  });
});
