import { getNumber, getSum, lettersToNumbers } from "./day1";

describe("day1 part 1", () => {
  test("first and last digits", () => {
    expect(getNumber("1abc2")).toBe(12);
  });

  test("first and last digits between other characters", () => {
    expect(getNumber("pqr3stu8vwx")).toBe(38);
  });

  test("more than 2 numbers", () => {
    expect(getNumber("a1b2c3d4e5f")).toBe(15);
  });

  test("only one number", () => {
    expect(getNumber("treb7uchet")).toBe(77);
  });

  test("sums up numbers from multiple lines", () => {
    const testInput = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
    expect(getSum(testInput)).toBe(142);
  });

  test("single character", () => {
    expect(getNumber("5")).toBe(55);
  });
});

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
});
