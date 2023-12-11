import {
  getNextDirection,
  getPath,
  getStartingPoint,
  parseInput,
  solve,
} from "./day10a";

describe("day10 part a", () => {
  const grid1 = parseInput("src/day10/day10-test1.input.txt");
  const grid2 = parseInput("src/day10/day10-test2.input.txt");

  test("getStartingPoint", () => {
    expect(getStartingPoint(grid1)).toEqual([1, 1]);
    expect(getStartingPoint(grid2)).toEqual([0, 2]);
  });

  test("getDirection", () => {
    expect(getNextDirection("Up", "S")).toEqual("Up");
    expect(getNextDirection("Down", "S")).toEqual("Down");
    expect(getNextDirection("Left", "S")).toEqual("Left");
    expect(getNextDirection("Right", "S")).toEqual("Right");
    expect(getNextDirection("Up", "|")).toEqual("Up");
    expect(getNextDirection("Up", "7")).toEqual("Left");
    expect(getNextDirection("Up", "F")).toEqual("Right");
    expect(getNextDirection("Down", "|")).toEqual("Down");
    expect(getNextDirection("Down", "J")).toEqual("Left");
    expect(getNextDirection("Down", "L")).toEqual("Right");
    expect(getNextDirection("Left", "-")).toEqual("Left");
    expect(getNextDirection("Left", "L")).toEqual("Up");
    expect(getNextDirection("Left", "F")).toEqual("Down");
    expect(getNextDirection("Right", "-")).toEqual("Right");
    expect(getNextDirection("Right", "J")).toEqual("Up");
    expect(getNextDirection("Right", "7")).toEqual("Down");
  });

  test("getPath", () => {
    expect(getPath(grid1, [1, 1], "Up")).toEqual([]);
    expect(getPath(grid1, [1, 1], "Down")).toEqual([
      "Down",
      "Down",
      "Right",
      "Right",
      "Up",
      "Up",
      "Left",
      "Left",
    ]);
    expect(getPath(grid1, [1, 1], "Left")).toEqual([]);
    expect(getPath(grid1, [1, 1], "Right")).toEqual([
      "Right",
      "Right",
      "Down",
      "Down",
      "Left",
      "Left",
      "Up",
      "Up",
    ]);
  });

  test("solve", () => {
    console.log(solve());
  });
});
