import {
  getIndexOfVerticalMirror,
  getWindow,
  Grid,
  isMirrorAt,
  solve,
} from "./day13a";

describe("day13 part a", () => {
  test("getWindow", () => {
    expect(() => getWindow([1, 2], 0)).toThrow();
    expect(getWindow([1, 2], 1)).toEqual([[1], [2]]);

    expect(getWindow([1, 2, 3, 4, 5, 6], 1)).toEqual([[1], [2]]);
    expect(getWindow([1, 2, 3, 4, 5, 6], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
    expect(getWindow([1, 2, 3, 4, 5, 6], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    expect(getWindow([1, 2, 3, 4, 5, 6], 4)).toEqual([
      [3, 4],
      [5, 6],
    ]);
    expect(getWindow([1, 2, 3, 4, 5, 6], 5)).toEqual([[5], [6]]);

    expect(getWindow([1, 2, 3, 4, 5, 6, 7], 1)).toEqual([[1], [2]]);
    expect(getWindow([1, 2, 3, 4, 5, 6, 7], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
    expect(getWindow([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    expect(getWindow([1, 2, 3, 4, 5, 6, 7], 4)).toEqual([
      [2, 3, 4],
      [5, 6, 7],
    ]);
    expect(getWindow([1, 2, 3, 4, 5, 6, 7], 5)).toEqual([
      [4, 5],
      [6, 7],
    ]);
    expect(getWindow([1, 2, 3, 4, 5, 6, 7], 6)).toEqual([[6], [7]]);
  });

  test("isMirrorAt", () => {
    expect(() => isMirrorAt([".", "#", "#", "."], 0)).toThrow();
    expect(isMirrorAt([".", "#", "#", "."], 1)).toBe(false);
    expect(isMirrorAt([".", "#", "#", "."], 2)).toBe(true);
    expect(isMirrorAt([".", "#", "#", "."], 3)).toBe(false);

    expect(() => isMirrorAt([".", ".", "#", "."], 0)).toThrow();
    expect(isMirrorAt([".", ".", "#", "."], 1)).toBe(true);
    expect(isMirrorAt([".", ".", "#", "."], 2)).toBe(false);
    expect(isMirrorAt([".", ".", "#", "."], 3)).toBe(false);

    expect(() => isMirrorAt([".", "#", ".", "."], 0)).toThrow();
    expect(isMirrorAt([".", "#", ".", "."], 1)).toBe(false);
    expect(isMirrorAt([".", "#", ".", "."], 2)).toBe(false);
    expect(isMirrorAt([".", "#", ".", "."], 3)).toBe(true);
  });

  test("getIndexOfVerticalMirror", () => {
    const grid: Grid = [
      ["#", ".", "#", "#", ".", ".", "#", "#", "."],
      [".", ".", "#", ".", "#", "#", ".", "#", "."],
      ["#", "#", ".", ".", ".", ".", ".", ".", "#"],
      ["#", "#", ".", ".", ".", ".", ".", ".", "#"],
      [".", ".", "#", ".", "#", "#", ".", "#", "."],
      [".", ".", "#", "#", ".", ".", "#", "#", "."],
      ["#", ".", "#", ".", "#", "#", ".", "#", "."],
    ];
    expect(getIndexOfVerticalMirror(grid)).toEqual(5);

    const grid2: Grid = [
      ["#", "#", ".", "#", "#", ".", "#"],
      [".", ".", ".", "#", "#", ".", "."],
      [".", ".", "#", "#", "#", "#", "."],
      [".", ".", "#", "#", "#", "#", "."],
      ["#", ".", ".", "#", "#", ".", "."],
      ["#", "#", ".", ".", ".", ".", "#"],
      [".", ".", "#", "#", "#", "#", "."],
      [".", ".", "#", "#", "#", "#", "."],
      ["#", "#", "#", ".", ".", "#", "#"],
    ];
    expect(getIndexOfVerticalMirror(grid2)).toEqual(4);

    const grid3: Grid = [
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "."],
    ];
    expect(getIndexOfVerticalMirror(grid3)).toEqual(1);

    const grid4: Grid = [
      ["#", ".", "."],
      [".", "#", "."],
      [".", ".", "."],
    ];
    expect(getIndexOfVerticalMirror(grid4)).toEqual(0);
  });

  test("solve", () => {
    console.log(solve());
  });
});
