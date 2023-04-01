import { describe, test, expect } from "vitest";
import { sum } from "./calulator";

describe("calculator sum value", () => {
  test("sum two values", () => {
    expect(sum(0, 0)).toBe(0);
    expect(sum(1, 1)).toBe(2);
    expect(sum(-1, 2)).toBe(1);
  });

  test("sum two values with diffrent data types", () => {
    expect(sum(1, Infinity)).toBe(Infinity);
  });
});
