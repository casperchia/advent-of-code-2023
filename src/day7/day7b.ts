import { readInput } from "../util";
import {
  calculateWinnings,
  Card,
  cards,
  compareFirstCard,
  getHandType,
  Hand,
  HandType,
  handTypes,
  Play,
} from "./day7a";

const handUpgrades: Record<HandType, HandType> = {
  "5K": "5K",
  "4K": "5K",
  FH: "4K",
  "3K": "4K",
  "2P": "FH",
  "1P": "3K",
  HC: "1P",
} as const;

export const parseInput = (filepath: string): Play[] => {
  return readInput(filepath)
    .split("\n")
    .map((line) => line.split(" "))
    .map(([handInput, bidInput]) => ({
      hand: handInput
        .split("")
        .map((card) => (card === "J" ? "JK" : card))
        .map((card: Card) => cards[card]) as Hand,
      bid: parseInt(bidInput),
    }));
};

export const getJokerHandType = (hand: Hand): HandType => {
  const handWithoutJokers = hand.filter((card) => cards.JK !== card);
  let handType = getHandType(handWithoutJokers);
  const numOfJokers = hand.filter((card) => cards.JK === card).length;
  for (let i = 0; i < numOfJokers; i++) {
    handType = handUpgrades[handType];
  }
  return handType;
};

export const compareJokerHandType = (a: Hand, b: Hand): number => {
  const aHandValue = handTypes[getJokerHandType(a)];
  const bHandValue = handTypes[getJokerHandType(b)];
  const diff = aHandValue - bHandValue;
  if (diff === 0) {
    return compareFirstCard(a, b);
  }
  return diff;
};

export const solve = () => {
  const sortedPlays = parseInput("src/day7/day7.input.txt").sort((a, b) =>
    compareJokerHandType(a.hand, b.hand),
  );
  return calculateWinnings(sortedPlays);
};
