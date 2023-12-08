import {
  getNumberOfSteps,
  Instruction,
  NetworkMap,
  parseInput,
  solve,
} from "./day8a";

describe("day8 part a", () => {
  test("getNumberOfSteps test 1", () => {
    const instructions: Instruction[] = ["L", "L", "R"];
    const networkMap: NetworkMap = {
      AAA: { left: "BBB", right: "BBB" },
      BBB: { left: "AAA", right: "ZZZ" },
      ZZZ: { left: "ZZZ", right: "ZZZ" },
    };
    expect(getNumberOfSteps("AAA", "ZZZ", instructions, networkMap)).toBe(6);
  });

  test("getNumberOfSteps test 2", () => {
    const { instructions, networkMap } = parseInput(
      "src/day8/day8-test.input.txt",
    );
    expect(getNumberOfSteps("AAA", "ZZZ", instructions, networkMap)).toBe(2);
  });

  test("solve", () => {
    console.log(solve());
  });
});
