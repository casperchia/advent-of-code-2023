import {
  getReport,
  getNumberOfSolutions,
  solve,
  isReportValid,
} from "./day12a";

describe("day12 part a", () => {
  test("isReportValid", () => {
    expect(isReportValid(getReport("#.#.### 1,1,3"))).toEqual(true);
    expect(isReportValid(getReport(".#...#....###. 1,1,3"))).toEqual(true);
    expect(isReportValid(getReport(".#.###.#.###### 1,3,1,6"))).toEqual(true);
    expect(isReportValid(getReport("####.#...#... 4,1,1"))).toEqual(true);
    expect(isReportValid(getReport("#....######..#####. 1,6,5"))).toEqual(true);
    expect(isReportValid(getReport(".###.##....# 3,2,1"))).toEqual(true);

    expect(isReportValid(getReport("#.#.### 2,1,3"))).toEqual(false);
    expect(isReportValid(getReport(".##....###. 1,1,3"))).toEqual(false);
    expect(isReportValid(getReport(".####.#.###### 1,3,1,6"))).toEqual(false);
    expect(isReportValid(getReport("#.##.#...#... 4,1,1"))).toEqual(false);
    expect(isReportValid(getReport("#....#####..######. 1,6,5"))).toEqual(
      false,
    );
    expect(isReportValid(getReport(".###.##....# 2,3,1"))).toEqual(false);
  });

  test("getNumberOfSolutions", () => {
    expect(getNumberOfSolutions(getReport("???.### 1,1,3"))).toEqual(1);
    expect(getNumberOfSolutions(getReport(".??..??...?##. 1,1,3"))).toEqual(4);
    expect(getNumberOfSolutions(getReport("?#?#?#?#?#?#?#? 1,3,1,6"))).toEqual(
      1,
    );
    expect(getNumberOfSolutions(getReport("????.#...#... 4,1,1"))).toEqual(1);
    expect(
      getNumberOfSolutions(getReport("????.######..#####. 1,6,5")),
    ).toEqual(4);
    expect(getNumberOfSolutions(getReport("?###???????? 3,2,1"))).toEqual(10);
  });

  test("solve", () => {
    console.log(solve());
  });
});
