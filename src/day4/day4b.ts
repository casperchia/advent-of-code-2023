import { Card, generateCards, getMatches } from "./day4a";
import { readInput } from "../util";

export const getCardCounts = (cards: Card[]): number[] => {
  const counts = new Array(cards.length).fill(1);
  counts.forEach((currentCardCount, index) => {
    const matches = getMatches(cards[index]);
    for (let i = 1; i <= matches && i < cards.length; i++) {
      counts[index + i] += 1 * currentCardCount;
    }
  });
  return counts;
};

export const getTotalCards = (cards: Card[]): number => {
  return getCardCounts(cards).reduce((a, b) => a + b);
};

export const solve = () => {
  return getTotalCards(generateCards(readInput("src/day4/day4.input.txt")));
};
