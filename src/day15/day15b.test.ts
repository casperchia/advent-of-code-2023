import { Box, getFocusingPower, runInstruction, solve } from "./day15b";

describe("day15 part b", () => {
  test("runInstruction", () => {
    let boxes = new Map<number, Box>();

    boxes = runInstruction(boxes, "rn=1");
    expect(boxes.get(0)).toEqual([["rn", 1]]);

    boxes = runInstruction(boxes, "cm-");
    expect(boxes.get(0)).toEqual([["rn", 1]]);

    boxes = runInstruction(boxes, "qp=3");
    expect(boxes.get(0)).toEqual([["rn", 1]]);
    expect(boxes.get(1)).toEqual([["qp", 3]]);

    boxes = runInstruction(boxes, "cm=2");
    expect(boxes.get(0)).toEqual([
      ["rn", 1],
      ["cm", 2],
    ]);
    expect(boxes.get(1)).toEqual([["qp", 3]]);

    boxes = runInstruction(boxes, "qp-");
    expect(boxes.get(0)).toEqual([
      ["rn", 1],
      ["cm", 2],
    ]);
    expect(boxes.get(1)).toEqual([]);

    boxes = runInstruction(boxes, "pc=4");
    expect(boxes.get(0)).toEqual([
      ["rn", 1],
      ["cm", 2],
    ]);
    expect(boxes.get(3)).toEqual([["pc", 4]]);

    boxes = runInstruction(boxes, "cm-");
    expect(boxes.get(0)).toEqual([["rn", 1]]);
  });

  test("getFocusingPower", () => {
    const boxes = new Map<number, Box>([
      [
        0,
        [
          ["xx", 1],
          ["xx", 2],
        ],
      ],
      [
        3,
        [
          ["xx", 7],
          ["xx", 5],
          ["xx", 6],
        ],
      ],
    ]);
    expect(getFocusingPower(boxes)).toEqual(145);
  });

  test("solve", () => {
    console.log(solve());
  });
});
