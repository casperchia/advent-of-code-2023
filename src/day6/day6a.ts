import { readInput } from "../util";

type Race = [number, number];

export const getNumbers = (input: string) =>
  input.split(":")[1].trim().split(/\s+/).map(Number);

export const parseInput = (filepath: string): Race[] => {
  const [timeString, distanceString] = readInput(filepath).split("\n");
  const times = getNumbers(timeString);
  const distances = getNumbers(distanceString);
  return times.map((time, i) => [time, distances[i]]);
};

export const getPossibleSolutions = (
  time: number,
  recordDistance: number,
): number => {
  return Array.from({ length: time + 1 }, (_, i) => i).reduce(
    (count, i) => (i * (time - i) > recordDistance ? count + 1 : count),
    0,
  );
};

export const solve = () => {
  return parseInput("src/day6/day6.input.txt").reduce(
    (result, [time, recordDistance]) =>
      getPossibleSolutions(time, recordDistance) * result,
    1,
  );
};
