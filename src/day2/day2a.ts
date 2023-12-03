import { readInput } from "../util";

type Set = {
  red: number;
  green: number;
  blue: number;
};

export type Game = {
  gameId: number;
  sets: Set[];
};

export const parseFile = (filepath: string): Game[] => {
  const gameIdRegex = /Game (?<gameId>\d+): (?<sets>.*)/;
  return readInput(filepath)
    .split("\n")
    .map((l): Game => {
      const matches = l.match(gameIdRegex);
      const gameId = Number(matches.groups["gameId"]);
      const sets = matches.groups["sets"]
        .split(";")
        .map((s) => s.trim())
        .map((setString) => ({
          red: Number(setString.match(/(\d+) red/)?.[1] ?? 0),
          green: Number(setString.match(/(\d+) green/)?.[1] ?? 0),
          blue: Number(setString.match(/(\d+) blue/)?.[1] ?? 0),
        }));
      return {
        gameId,
        sets,
      };
    });
};

export const getPossibleGames = (
  red: number,
  green: number,
  blue: number,
  games: Game[],
): number[] => {
  return games
    .filter((game) => {
      return game.sets.every((s) => isSetPossible(red, green, blue, s));
    })
    .map((game) => game.gameId);
};

const isSetPossible = (
  red: number,
  green: number,
  blue: number,
  set: Set,
): boolean => set.red <= red && set.green <= green && set.blue <= blue;

export const solve = () => {
  return getPossibleGames(
    12,
    13,
    14,
    parseFile("src/day2/day2.input.txt"),
  ).reduce((a, b) => a + b);
};

// parseFile("src/day2/day2.input.txt");
// console.log(JSON.stringify(parseFile("src/day2/day2.input.txt"), null, 2));
