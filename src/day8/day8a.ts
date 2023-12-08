import { readInput } from "../util";

export type NodeId = string;

export type Branch = {
  left: NodeId;
  right: NodeId;
};

export type Instruction = "L" | "R";

export type Input = {
  instructions: Instruction[];
  networkMap: NetworkMap;
};

export type NetworkMap = Record<NodeId, Branch>;

export const generateNetworkMap = (inputLines: string[]): NetworkMap =>
  inputLines.reduce((map, line) => {
    const { nodeId, left, right } = line.match(
      /(?<nodeId>[A-Z]{3}) = \((?<left>[A-Z]{3}), (?<right>[A-Z]{3})\)/,
    ).groups;
    return { ...map, [nodeId]: { left, right } };
  }, {} as NetworkMap);

export const parseInput = (filepath: string): Input => {
  const lines = readInput(filepath).split("\r\n");
  const instructions = lines.shift().split("") as Instruction[];
  lines.shift(); // skip blank line
  const networkMap = generateNetworkMap(lines);
  return { instructions, networkMap };
};

export const getNumberOfSteps = (
  start: NodeId,
  end: NodeId,
  instructions: Instruction[],
  networkMap: NetworkMap,
): number => {
  let currentNode = start;
  let stepCount = 0;
  while (currentNode !== end) {
    for (const instruction of instructions) {
      currentNode =
        instruction === "L"
          ? networkMap[currentNode].left
          : networkMap[currentNode].right;
      stepCount++;
      if (currentNode === end) {
        return stepCount;
      }
    }
  }
  return 0;
};

export const solve = () => {
  const { instructions, networkMap } = parseInput("src/day8/day8.input.txt");
  return getNumberOfSteps("AAA", "ZZZ", instructions, networkMap);
};
