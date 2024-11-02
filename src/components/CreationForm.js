import { useState } from "react";
import { svgs } from "../svgs";

function CreationForm({ onAdd }) {
  const [newTask, setNewTask] = useState({
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  }
  function handleAdd(event) {
    event.preventDefault();
    onAdd(newTask);
    setNewTask({
      content: "",
    });
  }
  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="add tasks"
        name="content"
        value={newTask.content}
        onChange={handleChange}
      />
      <button>{svgs.add}</button>
    </form>
  );
}

export default CreationForm;
