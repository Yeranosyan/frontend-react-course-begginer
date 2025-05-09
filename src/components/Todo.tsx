import { FaCheckCircle, FaTrash } from "react-icons/fa";
import type { TodoProp } from "../types/todos";

const Todo = ({ todo, completeTodo, deleteTodo }: TodoProp) => {
  return (
    <div className="bg-gray-600/40 rounded-md mb-1 p-3 flex justify-between items-center">
      <p className={`${todo.completed === true ? "line-through" : ""}`}>
        {todo.text}
      </p>
      <div className="flex items-center gap-2 cursor-pointer">
        <FaCheckCircle
          onClick={() => completeTodo(todo.id)}
          className="hover:text-emerald-500/70"
        />
        <FaTrash
          onClick={() => deleteTodo(todo.id)}
          className="hover:text-rose-500/70"
        />
      </div>
    </div>
  );
};

export default Todo;
