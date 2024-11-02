import { useState, useEffect } from "react";
import { svgs } from "./svgs";
import "./App.css";
import TaskList from "./components/TaskList";
import CreationForm from "./components/CreationForm";

function App() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  const [tasks, setTasks] = useState(savedTasks);
  const emptySvg = svgs["empty"];

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(newTask) {
    if (newTask.content.length === 0) {
      alert("Task cannot be empty");
    } else {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: tasks.length + 1, content: newTask.content },
      ]);
    }
  }

  function editTask(id, updatedContent) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, content: updatedContent } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <CreationForm onAdd={addTask} />
      {tasks.length === 0 ? (
        <div className="emptyTasks">
          <p>
            Currently you don't have <br />
            tasks
          </p>
          {emptySvg}
        </div>
      ) : (
        <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
      )}
    </div>
  );
}

export default App;

