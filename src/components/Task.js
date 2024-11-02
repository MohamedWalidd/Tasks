import { svgs } from "../svgs";
import { useState } from "react";

function Task({ id, content, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(content);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleDelete() {
    onDelete(id);
  }

  function handleSave(event) {
    event.preventDefault();
    if (editedTask.length === 0) {
      alert("task can't be empty");
    } else {
      onEdit(id, editedTask);
      setIsEditing(false);
    }
  }

  function handleChange(event) {
    setEditedTask(event.target.value);
  }

  return (
    <div className="taskContainer">
      {isEditing ? (
        <form onSubmit={handleSave} className="editForm">
          <input
            type="text"
            name="content"
            value={editedTask}
            onChange={handleChange}
          />
          <button type="submit">{svgs.save}</button>
        </form>
      ) : (
        <>
          <p className="taskContent">{content}</p>
          <div className="buttonContainer">
            <button onClick={handleEdit}>{svgs.edit}</button>
            <button onClick={handleDelete}>{svgs.delete}</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Task;
