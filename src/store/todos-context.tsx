import React, { useState, createContext, ReactNode } from "react";
import Todo from "../models/todo";

type todoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<todoContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{children: ReactNode}> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [ new Todo("Razieh"),
  //   new Todo("Zahra")]

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const itemDeleteHandler = (id: string) => {
    // const newTodos = todos.filter((item) => item.id !== id);
    // setTodos(newTodos);

    setTodos((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const values: todoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: itemDeleteHandler,
  };

  return (
    <TodosContext.Provider value={values}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
