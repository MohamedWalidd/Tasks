import { useState } from "react";
import { svgs } from "./svgs";
import "./App.css";
import TaskList from "./components/TaskList";
import CreationForm from "./components/CreationForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const emptySvg = svgs["empty"];

  function addTask(newTask) {
    if (newTask.content.length === 0) {
      alert("Task cannot be empty");
    } else {
      setTasks([...tasks, { id: tasks.length + 1, content: newTask.content }]);
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

