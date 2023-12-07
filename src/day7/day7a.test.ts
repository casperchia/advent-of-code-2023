import {
  calculateWinnings,
  compareFirstCard,
  compareHandType,
  getHandType,
  Hand,
  Play,
  solve,
} from "./day7a";

describe("day7 part a", () => {
  test("compareFirstCard", () => {
    const a = [1, 2, 3];
    const b = [1, 2, 4];
    expect(compareFirstCard(a, b)).toBe(-1);
    expect(compareFirstCard(b, a)).toBe(1);
    expect(compareFirstCard(a, a)).toBe(0);

    const hands = [a, b];
    expect(hands.sort(compareFirstCard)).toEqual([a, b]);
  });

  test("getHandType", () => {
    const fiveOfAKind: Hand = [2, 2, 2, 2, 2];
    const fourOfAKind: Hand = [2, 3, 2, 2, 2];
    const fullHouse: Hand = [2, 2, 3, 3, 3];
    const threeOfAKind: Hand = [2, 2, 2, 4, 5];
    const twoPair: Hand = [2, 3, 5, 2, 3];
    const onePair: Hand = [2, 3, 4, 5, 2];
    const highCard: Hand = [2, 3, 4, 5, 6];
    expect(getHandType(fiveOfAKind)).toBe("5K");
    expect(getHandType(fourOfAKind)).toBe("4K");
    expect(getHandType(fullHouse)).toBe("FH");
    expect(getHandType(threeOfAKind)).toBe("3K");
    expect(getHandType(twoPair)).toBe("2P");
    expect(getHandType(onePair)).toBe("1P");
    expect(getHandType(highCard)).toBe("HC");
  });

  test("compareHandType", () => {
    const a: Hand = [3, 2, 10, 3, 13];
    const b: Hand = [10, 5, 5, 11, 5];
    const c: Hand = [13, 13, 6, 7, 7];
    const d: Hand = [13, 10, 11, 11, 10];
    const e: Hand = [12, 12, 12, 11, 14];
    const hands = [a, b, c, d, e];
    expect(hands.sort(compareHandType)).toEqual([a, d, c, b, e]);
  });

  test("calculateWinnings", () => {
    const plays = [
      { bid: 1 },
      { bid: 2 },
      { bid: 3 },
      { bid: 4 },
      { bid: 5 },
    ] as Play[];
    expect(calculateWinnings(plays)).toBe(55);
  });

  test("solve", () => {
    console.log(solve());
  });
});
