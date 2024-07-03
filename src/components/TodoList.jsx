import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    setIsEditing(true);
    setCurrentTodo({ ...todos[index], index });
    setTask(todos[index].text);
  };

  const updateTodo = () => {
    const newTodos = [...todos];
    newTodos[currentTodo.index] = {
      text: task,
      completed: currentTodo.completed,
    };
    setTodos(newTodos);
    setIsEditing(false);
    setTask("");
    setCurrentTodo({});
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-grow px-4 py-2 border rounded"
          placeholder="Add a new task..."
        />
        <button
          onClick={isEditing ? updateTodo : addTodo}
          className={`ml-2 px-4 py-2 ${
            isEditing ? "bg-green-500" : "bg-[#dd7dd5]"
          } text-white rounded`}
        >
          {isEditing ? "Update" : "Add"}
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`flex justify-between items-center mb-2 p-2 border rounded ${
              todo.completed ? "bg-green-200" : ""
            }`}
          >
            <span
              onClick={() => toggleComplete(index)}
              className={`cursor-pointer ${
                todo.completed ? "line-through" : ""
              }`}
            >
              {todo.text}
            </span>
            <div>
              <button
                onClick={() => editTodo(index)}
                className="ml-2 px-2 py-1 bg-yellow-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(index)}
                className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
