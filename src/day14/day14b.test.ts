import { cycle, solve, spinCycle } from "./day14b";
import { input } from "./day14a.test";
import { getTotalLoad, parseInput } from "./day14a";

describe("day14 part b", () => {
  test("cycle", () => {
    const cycle1 =
      ".....#....\n" +
      "....#...O#\n" +
      "...OO##...\n" +
      ".OO#......\n" +
      ".....OOO#.\n" +
      ".O#...O#.#\n" +
      "....O#....\n" +
      "......OOOO\n" +
      "#...O###..\n" +
      "#..OO#....";

    const cycle2 =
      ".....#....\n" +
      "....#...O#\n" +
      ".....##...\n" +
      "..O#......\n" +
      ".....OOO#.\n" +
      ".O#...O#.#\n" +
      "....O#...O\n" +
      ".......OOO\n" +
      "#..OO###..\n" +
      "#.OOO#...O";

    const cycle3 =
      ".....#....\n" +
      "....#...O#\n" +
      ".....##...\n" +
      "..O#......\n" +
      ".....OOO#.\n" +
      ".O#...O#.#\n" +
      "....O#...O\n" +
      ".......OOO\n" +
      "#...O###.O\n" +
      "#.OOO#...O";

    const grid = parseInput(input);
    const cycle1Grid = parseInput(cycle1);
    const cycle2Grid = parseInput(cycle2);
    const cycle3Grid = parseInput(cycle3);
    expect(spinCycle(grid, 1)).toEqual(cycle1Grid);
    expect(spinCycle(grid, 2)).toEqual(cycle2Grid);
    expect(spinCycle(grid, 3)).toEqual(cycle3Grid);
  });

  test("spinCycle", () => {
    const grid = parseInput(input);
    let totalLoad = getTotalLoad(grid);
    let count = 0;
    while (totalLoad !== 64) {
      totalLoad = getTotalLoad(spinCycle(grid, 1));
      count++;
    }
    console.log(count);
    expect(getTotalLoad(spinCycle(grid, 1000))).toEqual(64);
  });

  test("solve", () => {
    console.log(solve());
  });
});
