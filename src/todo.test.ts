import { describe, test, expect } from "vitest";
import { getTodos, addTodoItem, Todo } from "./todo";

describe("todo app", () => {
  test("get todos", () => {
    expect(getTodos([])).toStrictEqual([]);
  });
  test("add todo item", () => {
    const todosData: Todo[] = [];
    expect(addTodoItem(todosData, "running")).toStrictEqual([
      { text: "running" },
    ]);
  });
});
