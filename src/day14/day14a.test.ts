import {
  getTotalLoad,
  parseInput,
  shiftRight,
  shiftRoundRocksRight,
  tiltUp,
  solve,
} from "./day14a";

export const input =
  "O....#....\n" +
  "O.OO#....#\n" +
  ".....##...\n" +
  "OO.#O....O\n" +
  ".O.....O#.\n" +
  "O.#..O.#.#\n" +
  "..O..#O..O\n" +
  ".......O..\n" +
  "#....###..\n" +
  "#OO..#....";

export const output =
  "OOOO.#.O..\n" +
  "OO..#....#\n" +
  "OO..O##..O\n" +
  "O..#.OO...\n" +
  "........#.\n" +
  "..#....#.#\n" +
  "..O..#.O.O\n" +
  "..O.......\n" +
  "#....###..\n" +
  "#....#....";

describe("day14 part a", () => {
  test("tiltUp", () => {
    const inputGrid = parseInput(input);
    const outputGrid = parseInput(output);
    expect(tiltUp(inputGrid)).toEqual(outputGrid);
  });

  test("shiftRoundRocksRight", () => {
    expect(shiftRoundRocksRight(["O", ".", ".", "O", ".", "."])).toEqual([
      ".",
      ".",
      ".",
      ".",
      "O",
      "O",
    ]);
    expect(shiftRoundRocksRight([".", ".", "O", "O", "O", "O"])).toEqual([
      ".",
      ".",
      "O",
      "O",
      "O",
      "O",
    ]);
  });

  test("shiftRight", () => {
    expect(shiftRight(["O", ".", "#"])).toEqual([".", "O", "#"]);
    expect(shiftRight(["O", "#", "."])).toEqual(["O", "#", "."]);
    expect(shiftRight(["O", ".", "#", "O", ".", "#"])).toEqual([
      ".",
      "O",
      "#",
      ".",
      "O",
      "#",
    ]);
  });

  test("getTotalLoad", () => {
    const grid = parseInput(input);
    expect(getTotalLoad(grid)).toEqual(136);
  });

  test("solve", () => {
    console.log(solve());
  });
});
