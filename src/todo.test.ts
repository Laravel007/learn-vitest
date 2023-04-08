import { describe, test, expect } from "vitest";
import { getTodos, addTodoItem, Todo } from "./todo";

describe("todo app", () => {
  test("get todos", () => {
    expect(getTodos([])).toStrictEqual([]);
  });

  test("add todo item", () => {
    let todosData: Todo[] = [];

    const updatedTodos1 = addTodoItem(todosData, "running");
    todosData = updatedTodos1;
    expect(todosData).toStrictEqual([{ text: "running" }]);
    expect(todosData[todosData.length - 1]).toStrictEqual({ text: "running" });

    const updatedTodos2 = addTodoItem(todosData, "sleeping");
    todosData = updatedTodos2;
    expect(todosData).toStrictEqual([
      { text: "running" },
      { text: "sleeping" },
    ]);
    expect(todosData[todosData.length - 1]).toStrictEqual({ text: "sleeping" });

    const updatedTodos3 = addTodoItem(todosData, "dreaming");
    todosData = updatedTodos3;
    expect(todosData[todosData.length - 1]).toStrictEqual({ text: "dreaming" });
  });

  test("add todo, then delete, then add again", () => {
    let todosData: Todo[] = [];

    const updatedTodos1 = addTodoItem(todosData, "cooking");
    todosData = updatedTodos1;
    expect(todosData).toStrictEqual([{ text: "cooking" }]);

    // delete here

    const updatedTodos3 = addTodoItem(todosData, "dieting");
    todosData = updatedTodos3;
    expect(todosData).toStrictEqual([{ text: "dieting" }]);
  });
});
