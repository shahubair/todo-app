import { useState, useEffect } from "react";

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // animate on mount
  }, []);

  const handleDelete = () => {
    setIsVisible(false);
    setTimeout(() => deleteTodo(todo.id), 200); // wait for animation
  };

  return (
    <li
      className={`flex items-center justify-between bg-blue-50/70 p-3 rounded-lg mb-2 w-full transition-all duration-200 
      ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"} hover:bg-blue-100/80`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="mr-3 h-5 w-5 text-blue-500 accent-blue-500"
        />
        <span
          className={`text-blue-900 ${
            todo.completed ? "line-through text-blue-400/70" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-700 font-bold"
      >
        ✖
      </button>
    </li>
  );
}
