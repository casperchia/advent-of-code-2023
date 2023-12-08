import { Instruction, NetworkMap, NodeId, parseInput } from "./day8a";

export const getNumberOfStepsToZ = (
  start: NodeId,
  instructions: Instruction[],
  networkMap: NetworkMap,
): number => {
  let currentNode = start;
  let stepCount = 0;
  while (!currentNode.endsWith("Z")) {
    for (const instruction of instructions) {
      currentNode =
        instruction === "L"
          ? networkMap[currentNode].left
          : networkMap[currentNode].right;
      stepCount++;
      if (currentNode.endsWith("Z")) {
        return stepCount;
      }
    }
  }
  return 0;
};

const getLCM = (...numbers: number[]) => {
  const gcd = (x, y) => (!y ? x : gcd(y, x % y));
  const lcm = (x, y) => (x * y) / gcd(x, y);
  return [...numbers].reduce((a, b) => lcm(a, b));
};

const getNodeIdsEndingInA = (networkMap: NetworkMap): NodeId[] =>
  Object.keys(networkMap).filter((nodeId) => nodeId.endsWith("A"));

export const solve = () => {
  const { instructions, networkMap } = parseInput("src/day8/day8.input.txt");
  const steps = getNodeIdsEndingInA(networkMap).map((nodeId) =>
    getNumberOfStepsToZ(nodeId, instructions, networkMap),
  );
  return getLCM(...steps);
};
