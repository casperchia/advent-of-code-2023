import { readInput } from "../util";
import { hash } from "./day15a";

export type FocalLength = number;
export type Label = string;
export type Lens = [Label, FocalLength];
export type Box = Lens[];

export const runInstruction = (
  boxes: Map<number, Box>,
  instruction: string,
) => {
  if (instruction.includes("-")) {
    const [searchLabel] = instruction.split("-");
    const boxId = hash(searchLabel);
    const box = boxes.get(boxId) || [];
    const newBox = box.filter(([label]) => label !== searchLabel);
    boxes.set(boxId, newBox);
  } else if (instruction.includes("=")) {
    const [searchLabel, focalLengthStr] = instruction.split("=");
    const focalLength = Number(focalLengthStr);
    const boxId = hash(searchLabel);
    const box = boxes.get(boxId) || [];
    boxes.set(boxId, box);
    const lens = box.find(([label]) => label === searchLabel);
    if (lens) {
      lens[1] = focalLength;
    } else {
      box.push([searchLabel, focalLength]);
    }
  }
  return boxes;
};

export const getFocusingPower = (boxes: Map<number, Box>): number => {
  let total = 0;
  boxes.forEach((box, boxIndex) => {
    total = box.reduce((total, [label, focalLength], lensIndex) => {
      total += (boxIndex + 1) * (lensIndex + 1) * focalLength;
      return total;
    }, total);
  });
  return total;
};

export const solve = () => {
  const instructions = readInput("src/day15/day15.input.txt").split(",");
  const boxes = instructions.reduce((boxes, instruction) => {
    return runInstruction(boxes, instruction);
  }, new Map<number, Box>());
  return getFocusingPower(boxes);
};
