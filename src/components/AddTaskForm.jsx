import { useState, useEffect } from "react";
import "./AddTaskForm.css";

export default function AddTaskForm({ onAddTask, editingTask, handleCancelEdit, onUpdateTask }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("medium");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (editingTask) {
      setTaskTitle(editingTask.title);
      setTaskDescription(editingTask.description || "");
      setTaskPriority(editingTask.priority);
    }
  }, [editingTask]);

  const handleTitleChange = (event) => {
    setTaskTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setTaskDescription(event.target.value);
  };

  const handlePriorityChange = (event) => {
    const value = event.target.value;
    setTaskPriority(value);
  };

  const handleAddTask = () => {
    if (!taskTitle) {
      setShowError(true);
    } else {
      setShowError(false);
      onAddTask({
        title: taskTitle,
        description: taskDescription,
        priority: taskPriority,
      });

      setTaskTitle("");
      setTaskDescription("");
      setTaskPriority("medium");
    }
  };

  const handleEditTask = () => {
    if (!taskTitle) {
      setShowError(true);
    } else {
      setShowError(false);
      onUpdateTask({
        ...editingTask,
        title: taskTitle,
        description: taskDescription,
        priority: taskPriority,
      });

      setTaskTitle("");
      setTaskDescription("");
      setTaskPriority("medium");
      handleCancelEdit();
    }
  };

  const handleCancel = () => {
    setTaskTitle("");
    setTaskDescription("");
    setTaskPriority("medium");
    setShowError(false);
    handleCancelEdit();
  };

  return (
    <div className="add-task-form">
      <h2>{editingTask ? "Edit Task" : "Add New Task"}</h2>
      <div className="form-group">
        <input
          type="text"
          id="taskTitle"
          placeholder="Task title..."
          value={taskTitle}
          onChange={handleTitleChange}
        />
      </div>
      <div className="form-group">
        <textarea
          id="taskDescription"
          placeholder="Task description..."
          value={taskDescription}
          onChange={handleDescriptionChange}
        />
      </div>
      <div className="form-group">
        <select
          id="taskPriority"
          value={taskPriority}
          onChange={handlePriorityChange}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </div>
      {!editingTask ? (
        <button
          id="addTaskBtn"
          className="btn btn-primary"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      ) : (
        <div className="edit-cancel-container">
          <button
          id="editTaskBtn"
          className="btn btn-update"
          onClick={handleEditTask}
        > 
          Edit 
        </button>
        <button
          id="cancelTaskBtn"
          className="btn btn-cancel"
          onClick={handleCancel}
        >Cancel</button>
        </div>
        
      )}
      <p
        className="error-message"
        style={{ display: showError ? "block" : "none" }}
      >
        Task Title Cannot Be Empty!
      </p>
    </div>
  );
}
