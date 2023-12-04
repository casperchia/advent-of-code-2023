import { isNumber, readInput } from "../util";

export type Card = {
  winningNumbers: number[];
  numbers: number[];
};

const parseNumbers = (input: string): number[] =>
  input.split(" ").filter(isNumber).map(Number);

export const generateCards = (input: string) => {
  return input.split("\n").map((line) => {
    const matchGroups = line.match(/.*: (?<win>.*) \| (?<num>.*)/).groups;
    return {
      winningNumbers: parseNumbers(matchGroups["win"]),
      numbers: parseNumbers(matchGroups["num"]),
    };
  });
};

export const getMatches = (card: Card): number =>
  card.winningNumbers.reduce(
    (count, winningNumber) =>
      card.numbers.includes(winningNumber) ? count + 1 : count,
    0,
  );

export const getPoints = (matches: number): number => {
  if (matches === 0) return 0;
  return Math.pow(2, matches - 1);
};

export const getTotalPoints = (cards: Card[]): number =>
  cards.reduce((total, card) => total + getPoints(getMatches(card)), 0);

export const solve = () => {
  return getTotalPoints(generateCards(readInput("src/day4/day4.input.txt")));
};
