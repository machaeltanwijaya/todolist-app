import { parseCSVLine, generateId } from './csv';

export const parseCsvAndValidate = (content) => {
  const lines = content.trim().split('\n');
  if (lines.length < 1) return { success: false, error: 'CSV file is empty!' };

  const header = parseCSVLine(lines[0]);
  const expectedColumns = ['ID', 'Title', 'Description', 'Priority', 'Status', 'Created Date'];

  if (header.length !== expectedColumns.length) {
    return { success: false, error: 'Invalid CSV format! Expected columns: ' + expectedColumns.join(', ') };
  }

  for (let i = 0; i < expectedColumns.length; i++) {
    if (header[i].trim().toLowerCase() !== expectedColumns[i].toLowerCase()) {
      return { success: false, error: 'Invalid column "' + header[i] + '". Expected "' + expectedColumns[i] + '"' };
    }
  }

  const importedTasks = [];
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '') continue;

    const row = parseCSVLine(lines[i]);
    if (row.length !== 6) {
      return { success: false, error: 'Invalid data at row ' + (i + 1) + '. Expected 6 columns.' };
    }

    const [id, title, description, priority, status, createdAt] = row;
    const validPriorities = ['low', 'medium', 'high'];
    if (!validPriorities.includes(priority.toLowerCase())) {
      return { success: false, error: 'Invalid priority "' + priority + '" at row ' + (i + 1) };
    }

    const validStatuses = ['pending', 'completed'];
    if (!validStatuses.includes(status.toLowerCase())) {
      return { success: false, error: 'Invalid status "' + status + '" at row ' + (i + 1) };
    }

    importedTasks.push({
      id: id || generateId(),
      title,
      description,
      priority: priority.toLowerCase(),
      completed: status.toLowerCase() === 'completed',
      createdAt: createdAt || new Date().toLocaleDateString(),
    });
  }

  if (importedTasks.length === 0) return { success: false, error: 'No valid tasks found in CSV!' };
  return { success: true, tasks: importedTasks };
};
