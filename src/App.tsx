import { useState } from "react";
import Todos from "./components/Todos";
import "./App.css";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
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

  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={itemDeleteHandler} />
    </>
  );
}

export default App;
