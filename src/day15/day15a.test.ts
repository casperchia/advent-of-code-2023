import { getHashSum, hash, solve } from "./day15a";

describe("day15 part a", () => {
  test("hash", () => {
    expect(hash("HASH")).toEqual(52);
    expect(hash("rn=1")).toEqual(30);
    expect(hash("cm-")).toEqual(253);
  });

  test("getHashSum", () => {
    const input = "rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7";
    expect(getHashSum(input)).toEqual(1320);
  });

  test("solve", () => {
    console.log(solve());
  });
});
