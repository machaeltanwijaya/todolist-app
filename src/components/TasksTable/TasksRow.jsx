import { formatDate } from "../../utils/date.js";
import { getPriorityClass } from "../../utils/priority.js";

export default function TasksRow({ task, onEditTask, onDeleteTask, onToggleStatus }) {
  const handleEdit = () => {
    onEditTask(task);
  };

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  const handleToggle = () => {
    onToggleStatus(task.id);
  };

  const isCompleted = task.status === "completed";

  return (
    <tr
      key={task.id}
      className={isCompleted ? "task-completed" : ""}
    >
      <td>
        <input
          type="checkbox"
          className="status-checkbox"
          checked={isCompleted}
          onChange={handleToggle}
        />
      </td>
      <td className={isCompleted ? "completed-text" : ""}>{task.title}</td>
      <td className={isCompleted && task.description ? "completed-text" : ""}>{task.description || "-"}</td>
      <td>
        <span className={`priority-badge ${getPriorityClass(task.priority)}`}>
          {task.priority}
        </span>
      </td>
      <td>{formatDate(task.createdAt)}</td>
      <td>
        <div className="actions-cell">
          <button className="btn btn-edit" onClick={handleEdit}>
            Edit
          </button>
          <button
            className="btn btn-delete"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
