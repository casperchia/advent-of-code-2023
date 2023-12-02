import { getNumber, getSum, solve } from "./day1a";

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

  test("solve", () => {
    console.log(solve());
  });
});
