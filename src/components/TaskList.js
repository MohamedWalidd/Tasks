import "../App.css";
import Task from "./Task";

function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <div className="taskListContainer">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          content={task.content}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
