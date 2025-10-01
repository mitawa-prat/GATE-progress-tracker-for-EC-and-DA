'use client';

import React, { useRef } from 'react';
import { LoadingButton } from './Loading';
import { TopicStatuses, Task } from '../data/syllabus';

interface DataManagerProps {
  selectedPapers: string[];
  topicStatuses: TopicStatuses;
  tasks: Task[];
  onImportData: (data: { selectedPapers: string[]; topicStatuses: TopicStatuses; tasks: Task[] }) => void;
  onError: (message: string) => void;
  onSuccess: (message: string) => void;
}

export const DataManager: React.FC<DataManagerProps> = ({
  selectedPapers,
  topicStatuses,
  tasks,
  onImportData,
  onError,
  onSuccess
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isExporting, setIsExporting] = React.useState(false);
  const [isImporting, setIsImporting] = React.useState(false);

  const exportData = async () => {
    try {
      setIsExporting(true);
      
      const exportData = {
        selectedPapers,
        topicStatuses,
        tasks,
        exportDate: new Date().toISOString(),
        version: '1.0'
      };

      const dataStr = JSON.stringify(exportData, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `gate-progress-backup-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      URL.revokeObjectURL(url);
      onSuccess('Data exported successfully! Check your downloads folder.');
    } catch (error) {
      console.error('Export error:', error);
      onError('Failed to export data. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setIsImporting(true);
      
      const text = await file.text();
      const importedData = JSON.parse(text);
      
      // Validate the imported data structure
      if (!importedData.selectedPapers || !importedData.topicStatuses || !importedData.tasks) {
        throw new Error('Invalid file format');
      }
      
      // Additional validation
      if (!Array.isArray(importedData.selectedPapers) || 
          typeof importedData.topicStatuses !== 'object' ||
          !Array.isArray(importedData.tasks)) {
        throw new Error('Invalid data structure');
      }
      
      onImportData({
        selectedPapers: importedData.selectedPapers,
        topicStatuses: importedData.topicStatuses,
        tasks: importedData.tasks
      });
      
      onSuccess('Data imported successfully!');
    } catch (error) {
      console.error('Import error:', error);
      onError('Failed to import data. Please check the file format.');
    } finally {
      setIsImporting(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 dark:text-white flex items-center">
        <span className="mr-2">💾</span>
        Data Management
      </h2>
      
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Backup your progress data or restore from a previous backup.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <LoadingButton
            onClick={exportData}
            isLoading={isExporting}
            loadingText="Exporting..."
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span className="mr-2">📤</span>
            Export Data
          </LoadingButton>
          
          <LoadingButton
            onClick={triggerFileSelect}
            isLoading={isImporting}
            loadingText="Importing..."
            className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <span className="mr-2">📥</span>
            Import Data
          </LoadingButton>
        </div>
        
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          onChange={handleFileSelect}
          className="hidden"
          aria-label="Select backup file to import"
        />
        
        <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
          <p>• Export creates a JSON backup file with all your progress data</p>
          <p>• Import will replace all current data with the backup file</p>
          <p>• Make sure to export your current data before importing</p>
        </div>
      </div>
    </div>
  );
};

export default DataManager;