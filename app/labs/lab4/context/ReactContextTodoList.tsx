"use client";

import { useState } from "react";
import { useTodosContext, type Todo } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [todo, setTodo] = useState<Todo>({ id: "-1", title: "" });
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = () => {
    if (!todo.title.trim()) return;
    if (isEditing) {
      updateTodo(todo);
      setIsEditing(false);
    } else {
      addTodo(todo.title);
    }
    setTodo({ id: "-1", title: "" });
  };

  return (
    <div id="wd-react-context-todo-list" className="mt-4">
      <h3>React Context Todo List</h3>
      <div className="mb-3 flex gap-2">
        <input
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          placeholder="New Todo Title"
          className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
          id="wd-todo-title-input"
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-todo-click"
        >
          {isEditing ? "Update" : "Add"}
        </button>
      </div>
      <ul className="m-0 max-w-md list-none p-0">
        {todos.map((item) => (
          <li
            key={item.id}
            className="mb-2 flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-2"
          >
            <span>{item.title}</span>
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => {
                  setTodo(item);
                  setIsEditing(true);
                }}
                className="rounded bg-amber-500 px-2 py-1 text-xs font-medium text-white"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => deleteTodo(item.id)}
                className="rounded bg-red-600 px-2 py-1 text-xs font-medium text-white"
                id={`wd-delete-todo-${item.id}-click`}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}