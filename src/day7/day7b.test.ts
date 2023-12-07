import { getJokerHandType, solve } from "./day7b";
import { Hand } from "./day7a";

describe("day7 part b", () => {
  test("getJokerHandType standard cards", () => {
    const fiveOfAKind: Hand = [2, 2, 2, 2, 2];
    const fourOfAKind: Hand = [2, 3, 2, 2, 2];
    const fullHouse: Hand = [2, 2, 3, 3, 3];
    const threeOfAKind: Hand = [2, 2, 2, 4, 5];
    const twoPair: Hand = [2, 3, 5, 2, 3];
    const onePair: Hand = [2, 3, 4, 5, 2];
    const highCard: Hand = [2, 3, 4, 5, 6];
    expect(getJokerHandType(fiveOfAKind)).toBe("5K");
    expect(getJokerHandType(fourOfAKind)).toBe("4K");
    expect(getJokerHandType(fullHouse)).toBe("FH");
    expect(getJokerHandType(threeOfAKind)).toBe("3K");
    expect(getJokerHandType(twoPair)).toBe("2P");
    expect(getJokerHandType(onePair)).toBe("1P");
    expect(getJokerHandType(highCard)).toBe("HC");
  });

  test("getJokerHandType with 1 Joker", () => {
    const fiveOfAKind: Hand = [2, 2, 2, 2, 0];
    const fourOfAKind: Hand = [2, 2, 2, 3, 0];
    const fullHouse: Hand = [2, 2, 3, 3, 0];
    const threeOfAKind: Hand = [2, 2, 3, 4, 0];
    const onePair: Hand = [2, 3, 4, 5, 0];
    expect(getJokerHandType(fiveOfAKind)).toBe("5K");
    expect(getJokerHandType(fourOfAKind)).toBe("4K");
    expect(getJokerHandType(fullHouse)).toBe("FH");
    expect(getJokerHandType(threeOfAKind)).toBe("3K");
    expect(getJokerHandType(onePair)).toBe("1P");
  });

  test("getJokerHandType with 2 Jokers", () => {
    const fiveOfAKind: Hand = [2, 2, 2, 0, 0];
    const fourOfAKind: Hand = [2, 2, 3, 0, 0];
    const threeOfAKind: Hand = [2, 3, 4, 0, 0];
    expect(getJokerHandType(fiveOfAKind)).toBe("5K");
    expect(getJokerHandType(fourOfAKind)).toBe("4K");
    expect(getJokerHandType(threeOfAKind)).toBe("3K");
  });

  test("getJokerHandType with 3 Jokers", () => {
    const fiveOfAKind: Hand = [2, 2, 0, 0, 0];
    const fourOfAKind: Hand = [2, 3, 0, 0, 0];
    expect(getJokerHandType(fiveOfAKind)).toBe("5K");
    expect(getJokerHandType(fourOfAKind)).toBe("4K");
  });

  test("solve", () => {
    console.log(solve());
  });
});
