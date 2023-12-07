import { readInput } from "../util";

export const cards = {
  A: 14,
  K: 13,
  Q: 12,
  J: 11,
  T: 10,
  "9": 9,
  "8": 8,
  "7": 7,
  "6": 6,
  "5": 5,
  "4": 4,
  "3": 3,
  "2": 2,
  // Joker
  JK: 0,
} as const;

export type Card = keyof typeof cards;

export type CardValue = (typeof cards)[Card];

export type Play = {
  hand: Hand;
  bid: number;
};

export type Hand = CardValue[];

export const handTypes = {
  "5K": 7,
  "4K": 6,
  FH: 5,
  "3K": 4,
  "2P": 3,
  "1P": 2,
  HC: 1,
} as const;

export type HandType = keyof typeof handTypes;

export const parseInput = (filepath: string): Play[] => {
  return readInput(filepath)
    .split("\n")
    .map((line) => line.split(" "))
    .map(([handInput, bidInput]) => ({
      hand: handInput.split("").map((card: Card) => cards[card]) as Hand,
      bid: parseInt(bidInput),
    }));
};

export const getCardCounts = (hand: Hand): Record<CardValue, number> => {
  return hand.reduce(
    (acc, card) => {
      acc[card] = (acc[card] || 0) + 1; // Increment the count for each number
      return acc;
    },
    {} as Record<CardValue, number>,
  );
};

export const getHandType = (hand: Hand): HandType => {
  const cardCountMap = getCardCounts(hand);
  const cardCounts = Object.values(cardCountMap);
  if (cardCounts.includes(5)) return "5K";
  if (cardCounts.includes(4)) return "4K";
  if (cardCounts.includes(3) && cardCounts.includes(2)) return "FH";
  if (cardCounts.includes(3)) return "3K";
  if (cardCounts.filter((c) => c === 2).length === 2) return "2P";
  if (cardCounts.includes(2)) return "1P";
  return "HC";
};

export const compareHandType = (a: Hand, b: Hand): number => {
  const aHandValue = handTypes[getHandType(a)];
  const bHandValue = handTypes[getHandType(b)];
  const diff = aHandValue - bHandValue;
  if (diff === 0) {
    return compareFirstCard(a, b);
  }
  return diff;
};

export const compareFirstCard = (a: number[], b: number[]): number => {
  if (a.length === 0) return 0;
  const diff = a[0] - b[0];
  if (diff === 0) {
    return compareFirstCard(a.slice(1), b.slice(1));
  }
  return diff;
};

export const calculateWinnings = (plays: Play[]): number =>
  plays.reduce((sum, play, i) => sum + play.bid * (i + 1), 0);

export const solve = () => {
  const sortedPlays = parseInput("src/day7/day7.input.txt").sort((a, b) =>
    compareHandType(a.hand, b.hand),
  );
  return calculateWinnings(sortedPlays);
};
