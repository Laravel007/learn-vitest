import { describe, test, expect } from "vitest";

import { count, increment, decrement, setCount } from "./counter";

describe("initial count value", () => {
  test("count is defined", () => {
    expect(count).toBeDefined();
    expect(count).toBe(0);
  });
});

describe("count increment", () => {
  test("count can be incremented with default value", () => {
    setCount(0);
    const newCount = increment(count);
    setCount(newCount);
    expect(count).toBe(1);
  });

  test("count can be incremented by 1", () => {
    setCount(0);
    setCount(increment(count, 1));
    expect(count).toBe(1);
  });
});

describe("count decrement", () => {
  test("count can be decremented with default value", () => {
    setCount(0);
    setCount(decrement(count));
    expect(count).toBe(-1);
  });

  test("count can be decremented by 1", () => {
    setCount(0);
    setCount(decrement(count, 1));
    expect(count).toBe(-1);
  });
});
