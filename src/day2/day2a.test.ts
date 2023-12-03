import { Game, getPossibleGames, solve } from "./day2a";

export const testGames: Game[] = [
  {
    gameId: 1,
    sets: [
      {
        red: 4,
        green: 0,
        blue: 3,
      },
      {
        red: 1,
        green: 2,
        blue: 6,
      },
      {
        red: 0,
        green: 2,
        blue: 0,
      },
    ],
  },
  {
    gameId: 2,
    sets: [
      {
        red: 0,
        green: 2,
        blue: 1,
      },
      {
        red: 1,
        green: 3,
        blue: 4,
      },
      {
        red: 0,
        green: 1,
        blue: 1,
      },
    ],
  },
  {
    gameId: 3,
    sets: [
      {
        red: 20,
        green: 8,
        blue: 6,
      },
      {
        red: 4,
        green: 13,
        blue: 5,
      },
      {
        red: 1,
        green: 5,
        blue: 0,
      },
    ],
  },
  {
    gameId: 4,
    sets: [
      {
        red: 3,
        green: 1,
        blue: 6,
      },
      {
        red: 6,
        green: 3,
        blue: 0,
      },
      {
        red: 14,
        green: 3,
        blue: 15,
      },
    ],
  },
  {
    gameId: 5,
    sets: [
      {
        red: 6,
        green: 3,
        blue: 1,
      },
      {
        red: 1,
        green: 2,
        blue: 2,
      },
    ],
  },
];

describe("day2 part a", () => {
  test("getPossibleGames", () => {
    expect(getPossibleGames(12, 13, 14, testGames)).toEqual(
      expect.arrayContaining([1, 2, 5]),
    );

    expect(getPossibleGames(0, 0, 0, testGames)).toEqual(
      expect.arrayContaining([]),
    );

    expect(getPossibleGames(20, 20, 20, testGames)).toEqual(
      expect.arrayContaining([1, 2, 3, 4, 5]),
    );
  });

  test("solve", () => {
    console.log(solve());
  });
});
