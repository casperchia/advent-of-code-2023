import { generatePermutations, readInput } from "../util";

export type Report = { status: string; groups: number[] };

export const getReport = (input: string): Report => {
  const [statusStr, groupsStr] = input.split(" ");
  return {
    status: statusStr,
    groups: groupsStr.split(",").map(Number),
  };
};

export const parseInput = (filename: string): Report[] => {
  return readInput(filename)
    .split("\n")
    .map((line) => line.trim())
    .map(getReport);
};

export const isReportValid = (report: Report): boolean => {
  const groups = report.status
    .split(".")
    .filter((s) => s.includes("#"))
    .map((s) => s.length);
  return (
    groups.length === report.groups.length &&
    groups.every((g, i) => g === report.groups[i])
  );
};

/**
 * Replaces all occurrences of searchValue in input with the values in replacements.
 */
export const replaceWith = (
  input: string,
  searchValue: string,
  replacements: string[],
) =>
  replacements.reduce(
    (input, replacement) => input.replace(searchValue, replacement),
    input,
  );

export const getNumberOfSolutions = (report: Report): number => {
  const values = [".", "#"];
  const unknownCount = report.status.split("").filter((c) => c === "?").length;
  return generatePermutations(values, unknownCount)
    .map((permutation) => replaceWith(report.status, "?", permutation))
    .map((status) => ({ status, groups: report.groups }))
    .map(isReportValid)
    .filter(Boolean).length;
};

export const solve = () => {
  return parseInput("src/day12/day12.input.txt")
    .map(getNumberOfSolutions)
    .reduce((a, b) => a + b, 0);
};
