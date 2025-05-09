import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import type { Todos } from "../types/todos";
import Footer from "./Footer";
import Todo from "./Todo";

function TodoApp() {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);

  const addTodo = () => {
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInput("");
  };

  const completeTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2 className="flex gap-5 justify-center items-center bg-emerald-500/40 rounded-md mb-10 p-3 text-white">
        <img src="/cube.png" alt="cube-logo" className="w-5 h-5" />
        React TODO | EP 1
      </h2>

      <div className="flex gap-4 mb-20">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Add Your Task"
        />
        <button onClick={addTodo} className="flex gap-2 items-center">
          <IoIosAddCircleOutline />
          Add New
        </button>
      </div>

      <div>
        {todos.length > 0 ? (
          <>
            <h2 className="text-center bg-blue-500/40 rounded-md mb-3 p-3 text-white">
              Your Created Tasks
            </h2>
            {todos.map((todo) => {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  completeTodo={completeTodo}
                  deleteTodo={deleteTodo}
                />
              );
            })}
          </>
        ) : (
          <h2 className="text-center bg-neutral-700/50 rounded-md mb-3 p-3 text-white">
            You have completed all your task
          </h2>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default TodoApp;
