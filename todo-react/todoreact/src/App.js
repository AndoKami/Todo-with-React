import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, importance: 1 }]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleSetImportance = (index, importance) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, importance } : { ...todo }
      )
    );
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTodo}>Ajouter</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text} - Importance : {todo.importance}
            <button onClick={() => handleDeleteTodo(index)} className="delete-btn">
              Supprimer
            </button>
            <button onClick={() => handleSetImportance(index, 2)} className="important-btn">
              Important
            </button>
            <button onClick={() => handleSetImportance(index, 1)} className="normal-btn">
              Normal
            </button>
            <button onClick={() => handleSetImportance(index, 0)} className="low-btn">
              Faible
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
