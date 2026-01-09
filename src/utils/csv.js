export const escapeCsvField = (field) => {
  if (field.includes(',') || field.includes('"') || field.includes('\n')) {
    return '"' + field.replace(/"/g, '""') + '"';
  }
  return field;
};

export const parseCSVLine = (line) => {
  const result = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (inQuotes) {
      if (char === '"') {
        if (line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        current += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ',') {
        result.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
  }

  result.push(current.trim());
  return result;
};

export const generateCsvContent = (tasks) => {
  const header = 'ID,Title,Description,Priority,Status,Created Date';
  const rows = tasks.map(task => {
    const id = task.id || '';
    const title = escapeCsvField(task.title || '');
    const description = escapeCsvField(task.description || '');
    const priority = task.priority || '';
    const status = task.status || 'pending';
    const createdAt = task.createdAt || '';
    
    return `${id},${title},${description},${priority},${status},${createdAt}`;
  });
  
  return [header, ...rows].join('\n');
};

export const generateId = () => '_' + Math.random().toString(36).substr(2, 9);
