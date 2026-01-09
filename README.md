# To Do List Application

A modern, responsive React-based task management application that helps you organize and track your daily tasks efficiently.

## Features

### ✨ Task Management
- **Add Tasks**: Create new tasks with title, description, and priority level
- **Edit Tasks**: Modify existing tasks by clicking the Edit button
- **Delete Tasks**: Remove tasks you no longer need
- **Mark as Complete**: Check/uncheck tasks to track completion status

### 🔍 Search & Filter
- **Search**: Find tasks quickly by searching through task titles
- **Status Filter**: View tasks by status (All, Pending, Completed)
- **Priority Filter**: Filter tasks by priority level (All, Low, Medium, High)

### 📊 Data Management
- **Export to CSV**: Download your tasks as a CSV file for backup or external use
- **Import from CSV**: Upload and restore tasks from a CSV file

## How to Use

### Adding a New Task

1. Fill in the **Task Title** (required field)
2. Optionally add a **Task Description** for more details
3. Select a **Priority Level**:
   - Low Priority (green badge)
   - Medium Priority (yellow badge)
   - High Priority (red badge)
4. Click the **Add Task** button

### Editing a Task

1. Click the **Edit** button next to the task you want to modify
2. The form will populate with the current task values
3. Make your changes to the title, description, or priority
4. Click the **Edit** button (next to Cancel) to save changes
5. Or click **Cancel** to discard changes

### Marking Tasks as Complete

- Click the **checkbox** in the Status column to toggle between Pending and Completed
- Completed tasks will have:
  - A checked checkbox
  - Strikethrough text
  - Green background highlighting

### Deleting a Task

- Click the **Delete** button next to the task you want to remove
- The task will be permanently removed from your list

### Searching and Filtering

1. **Search Tasks**: Type in the search box to find tasks by title
2. **Filter by Status**: Use the status dropdown to show:
   - All Status
   - Pending
   - Completed
3. **Filter by Priority**: Use the priority dropdown to show:
   - All Priorities
   - Low
   - Medium
   - High

### Exporting Tasks

1. Click the **Export to CSV** button
2. A CSV file will be downloaded with all your tasks
3. The file includes: title, description, priority, status, and creation date

### Importing Tasks

1. Click the **Import from CSV** button
2. Select a CSV file from your computer
3. The file must have the correct format (title, description, priority, status, createdAt)
4. Your current tasks will be replaced with the imported tasks

## CSV File Format

When importing tasks, your CSV file should have the following columns:

```csv
title,description,priority,status,createdAt
Task 1,Description here,medium,pending,2026-01-09T12:00:00.000Z
Task 2,Another description,high,completed,2026-01-09T13:00:00.000Z
```

### Column Requirements:
- **title**: Required - The task name
- **description**: Optional - Task details
- **priority**: Required - Must be `low`, `medium`, or `high`
- **status**: Required - Must be `pending` or `completed`
- **createdAt**: Required - ISO format date string

## Responsive Design

The application is fully responsive and works seamlessly on:
- Desktop computers (1000px+ width)
- Tablets (768px - 1000px width)
- Mobile phones (below 768px width)

On smaller screens:
- The table maintains readability with proper text wrapping
- Buttons stack vertically for easier interaction
- Font sizes adjust for optimal viewing

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
npm run build
```

## Technologies Used

- React 18 + Vite
- CSS3 (Responsive Design)
- JavaScript ES6+

## Tips for Best Use

1. **Use descriptive titles** - Make it easy to identify tasks at a glance
2. **Set priorities wisely** - High priority for urgent tasks only
3. **Regular cleanup** - Delete completed tasks you no longer need
4. **Export regularly** - Back up your tasks periodically
5. **Use descriptions** - Add context for complex tasks

---

Made with ❤️ using React
