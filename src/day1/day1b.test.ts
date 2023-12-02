import { getNumber, getSum } from "./day1a";
import { lettersToNumbers, solve } from "./day1b";

describe("day1 part 2", () => {
  test("letters to values", () => {
    expect(getNumber(lettersToNumbers("one"))).toBe(11);
    expect(getNumber(lettersToNumbers("oneoneoneone"))).toBe(11);
    expect(
      getNumber(lettersToNumbers("onetwothreefourfivesixseveneightnine")),
    ).toBe(19);
    expect(getNumber(lettersToNumbers("nineeightseven"))).toBe(97);
    expect(getNumber(lettersToNumbers("nineightseven"))).toBe(97);
    expect(getNumber(lettersToNumbers("seveneightwo"))).toBe(72);
    expect(getNumber(lettersToNumbers("two1nine"))).toBe(29);
    expect(getNumber(lettersToNumbers("eightwothree"))).toBe(83);
    expect(getNumber(lettersToNumbers("abcone2threexyz"))).toBe(13);
    expect(getNumber(lettersToNumbers("xtwone3four"))).toBe(24);
    expect(getNumber(lettersToNumbers("4nineeightseven2"))).toBe(42);
    expect(getNumber(lettersToNumbers("zoneight234"))).toBe(14);
    expect(getNumber(lettersToNumbers("7pqrstsixteen"))).toBe(76);
    expect(getNumber(lettersToNumbers("v6"))).toBe(66);
    expect(getNumber(lettersToNumbers("five"))).toBe(55);
  });

  test("sums up numbers from multiple lines", () => {
    const testInput = [
      "two1nine",
      "eightwothree",
      "abcone2threexyz",
      "xtwone3four",
      "4nineeightseven2",
      "zoneight234",
      "7pqrstsixteen",
    ];
    expect(getSum(testInput.map(lettersToNumbers))).toBe(281);
  });

  test("solve", () => {
    console.log(solve());
  });
});
