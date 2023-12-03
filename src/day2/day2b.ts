import { Game, parseFile } from "./day2a";

export const getPower = (game: Game): number => {
  const highestSet = game.sets.reduce(
    (highestSet, currentSet) => {
      return {
        red: currentSet.red > highestSet.red ? currentSet.red : highestSet.red,
        green:
          currentSet.green > highestSet.green
            ? currentSet.green
            : highestSet.green,
        blue:
          currentSet.blue > highestSet.blue ? currentSet.blue : highestSet.blue,
      };
    },
    { red: 0, green: 0, blue: 0 },
  );
  return highestSet.red * highestSet.green * highestSet.blue;
};

export const solve = () => {
  return parseFile("src/day2/day2.input.txt")
    .map(getPower)
    .reduce((a, b) => a + b);
};
