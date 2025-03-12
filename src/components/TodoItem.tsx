import classes from "./TodoItem.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoItem: React.FC<{
  text: string;
  id: string;
  onRemoveTodo: (id: string) => void;
}> = (props) => {
  return (
    <li className={classes.item}>
      <div>
        {props.text}{" "}
        <RiDeleteBin6Line onClick={() => props.onRemoveTodo(props.id)} />
      </div>
    </li>
  );
};

export default TodoItem;
