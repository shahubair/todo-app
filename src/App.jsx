import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text.trim() === "") return;
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-indigo-500 p-4">
      <div className="bg-white/95 backdrop-blur-md p-8 rounded-xl shadow-xl w-full max-w-md flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-900">
          📝 My Todo List
        </h1>

        {/* TodoForm */}
        <TodoForm addTodo={addTodo} />

        {/* Scrollable Todo List */}
        <ul className="w-full mt-4 list-none max-h-64 overflow-y-auto">
          {todos.length === 0 ? (
            <p className="text-center text-blue-700/60 italic">No tasks yet 😴</p>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
