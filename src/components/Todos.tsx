import React, {useContext} from 'react';
import { TodosContext } from '../store/todos-context';
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
const {items, removeTodo} = useContext(TodosContext)

  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          id={item.id}
          onRemoveTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
