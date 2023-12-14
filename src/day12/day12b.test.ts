import { solve, unfold } from "./day12b";

describe("day12 part b", () => {
  test("unfold", () => {
    expect(unfold(".# 1")).toEqual(".#?.#?.#?.#?.# 1,1,1,1,1");
    expect(unfold("???.### 1,1,3")).toEqual(
      "???.###????.###????.###????.###????.### 1,1,3,1,1,3,1,1,3,1,1,3,1,1,3",
    );
  });

  test("solve", () => {
    console.log(solve());
  });
});
