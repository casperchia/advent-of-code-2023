import { day1Input } from "./day1.input";

export const getNumber = (input: string): number => {
  const numbers = input?.split("").filter((char) => !isNaN(Number(char)));
  const numberString = [...numbers].shift() + [...numbers].pop();
  return Number(numberString);
};

export const getSum = (input: string[]): number => {
  return input.reduce((sum, line) => sum + getNumber(line), 0);
};

console.log(`Part 1: ${getSum(day1Input)}`);

// Initial solution which was wrong - this does not allow for re-use of characters
// e.g., "eightwo" would return "8wo" instead of "82"
export const lettersToNumbersWithoutOverlap = (input: string): string => {
  const replacer = (input: string) => {
    return input
      .replace("one", "1")
      .replace("two", "2")
      .replace("three", "3")
      .replace("four", "4")
      .replace("five", "5")
      .replace("six", "6")
      .replace("seven", "7")
      .replace("eight", "8")
      .replace("nine", "9");
  };
  return input.replace(
    /one|two|three|four|five|six|seven|eight|nine/g,
    replacer,
  );
};

export const lettersToNumbers = (input: string): string => {
  const length = input.length;
  let output = "";
  for (let i = 0; i < length; i++) {
    const substring = input.slice(i, length);
    if (substring.startsWith("one")) {
      output += "1";
    } else if (substring.startsWith("two")) {
      output += "2";
    } else if (substring.startsWith("three")) {
      output += "3";
    } else if (substring.startsWith("four")) {
      output += "4";
    } else if (substring.startsWith("five")) {
      output += "5";
    } else if (substring.startsWith("six")) {
      output += "6";
    } else if (substring.startsWith("seven")) {
      output += "7";
    } else if (substring.startsWith("eight")) {
      output += "8";
    } else if (substring.startsWith("nine")) {
      output += "9";
    } else if (substring.match(/^\d/)) {
      output += substring[0];
    }
  }
  return output;
};

const part2Input = day1Input.map(lettersToNumbers);
console.log(`Part 2: ${getSum(part2Input)}`);
