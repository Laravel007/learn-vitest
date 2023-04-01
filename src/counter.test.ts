import { increment, count, setCount } from "./counter";
import { describe, test, expect } from "vitest";

describe("count increment", () => {
  test("count is defined", () => {
    expect(count).toBeDefined();
    expect(count).toBe(0);
  });
  test("count can be incremented with default value", () => {
    setCount(0);
    const newCount = increment(count);
    setCount(newCount);

    expect(count).toBe(1);
  });
  test("count can be incremented by 1", () => {
    setCount(0);
    const newCount = increment(count, 1);
    setCount(newCount);

    expect(count).toBe(1);
  });
});
