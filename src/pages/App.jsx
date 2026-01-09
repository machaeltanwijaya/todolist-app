import { useEffect, useState } from 'react'
import AddTaskForm from '../components/AddTaskForm'
import ExportSection from '../components/ExportSection'
import SearchFilter from '../components/SearchFilter'
import TasksTable from '../components/TasksTable/TasksTable'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const handleAddTask = (newTask) => {
    const task = {
      id: Date.now(),
      ...newTask,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    setTasks([...tasks, task]);
  };

  const filterTasks = tasks.filter(task => {
    const matchesText = task.title.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = statusFilter === 'all' || task.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || task.priority === priorityFilter;

    return matchesText && matchesStatus && matchesPriority;
  });

  const handleUpdateTask = (updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
    setEditingTask(null);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleToggleStatus = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, status: task.status === 'pending' ? 'completed' : 'pending' }
        : task
    ));
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const handleImportTasks = (importedTasks) => {
    setTasks(importedTasks);
  };

  return (
    <div className="container">
        <h1>My To Do List</h1>
        <AddTaskForm 
          onAddTask={handleAddTask}
          editingTask={editingTask}
          handleCancelEdit={handleCancelEdit}
          onUpdateTask={handleUpdateTask}
        />
        <SearchFilter 
          searchText={searchText}
          setSearchText={setSearchText}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
        />
        <ExportSection 
          tasks={tasks} 
          onImportTasks={handleImportTasks} 
        />
        <TasksTable 
          tasks={filterTasks}
          onEditTask={handleEditTask}
          onDeleteTask = {handleDeleteTask}
          onToggleStatus={handleToggleStatus}
        />
    </div>
  )
}

export default App