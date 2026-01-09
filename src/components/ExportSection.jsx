import React, { useRef } from 'react';
import './ExportSection.css';
import { generateCsvContent } from '../utils/csv';
import { parseCsvAndValidate } from '../utils/csvValidator';

export default function ExportSection({ tasks, onImportTasks }) {
  const fileInputRef = useRef();

  const exportToCsv = () => {
    if (!tasks || tasks.length === 0) {
      alert('No tasks to export!');
      return;
    }

    const csvContent = generateCsvContent(tasks);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `tasks_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const importFromCsv = () => {
    fileInputRef.current.click();
  };

  const handleCsvFile = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.name.toLowerCase().endsWith('.csv')) {
      alert('Error: Please select a CSV file!');
      event.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      const result = parseCsvAndValidate(content);

      if (result.success) {
        if (onImportTasks) {
          onImportTasks(result.tasks);
        }
        alert('CSV imported successfully! ' + result.tasks.length + ' tasks loaded.');
      } else {
        alert('Error: ' + result.error);
      }

      event.target.value = '';
    };

    reader.onerror = () => {
      alert('Error reading file!');
      event.target.value = '';
    };

    reader.readAsText(file);
  };

  return (
    <div className="export-section">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleCsvFile}
        style={{ display: 'none' }}
        accept=".csv"
      />
      <button className="btn btn-import" onClick={importFromCsv}>
        Import from CSV
      </button>
      <button className="btn btn-export" onClick={exportToCsv}>
        Export to CSV
      </button>
    </div>
  );
}