import { day1Input } from "./day1.input";

export const getNumber = (input: string): number => {
  const numbers = input?.split("").filter((char) => !isNaN(Number(char)));
  const numberString = [...numbers].shift() + [...numbers].pop();
  return Number(numberString);
};

export const getSum = (input: string[]): number => {
  return input.reduce((sum, line) => sum + getNumber(line), 0);
};

export const solve = () => {
  return getSum(day1Input);
};
