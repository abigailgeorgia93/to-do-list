import React, { useState } from "react";
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>My To-Do List</h1>
      {tasks.map((task, index) => (
        <div key={index} className="task-container">
          <p>{task}</p>
          <button onClick={() => handleDeleteTask(index)}>Delete</button>
        </div>
      ))}
      
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>

    
  );
};

export default App;
