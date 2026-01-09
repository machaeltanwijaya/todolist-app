import './TasksTable.css';
import TasksRow from './TasksRow';

export default function TasksTable({ tasks, onEditTask, onDeleteTask, onToggleStatus } ) {
    return (
        <div className="tasks-table-container">
            <h2>Tasks List</h2>
            {tasks.length === 0 ? (
                <p id="noTasksMessage" className="no-tasks">No tasks found. Add your first task!</p>
            ) : (
                <table className="tasks-table">
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Created</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="tasksTableBody">
                        {tasks.map(task => (
                            <TasksRow 
                                key={task.id} 
                                task={task} 
                                onEditTask={onEditTask} 
                                onDeleteTask={onDeleteTask}
                                onToggleStatus={onToggleStatus}
                            />
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}