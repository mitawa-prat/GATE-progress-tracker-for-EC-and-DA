'use client';

import React, { useState, useEffect } from 'react';
import PaperSelectionModal from './components/PaperSelectionModal';
import ProgressSummary from './components/ProgressSummary';
import { ProgressStats } from './components/ProgressStats';
import { DataManager } from './components/DataManager';
import TopicManagement from './components/TopicManagement';
import TaskManagement from './components/TaskManagement';
import { ToastContainer } from './components/Toast';
import { LoadingOverlay } from './components/Loading';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useToast } from './hooks/useToast';
import { syllabus, TopicStatuses, TopicStatus, Task } from './data/syllabus';

export default function Home() {
  const [selectedPapers, setSelectedPapers] = useLocalStorage<string[]>('selectedPapers', []);
  const [topicStatuses, setTopicStatuses] = useLocalStorage<TopicStatuses>('gateTopicStatuses', {});
  const [tasks, setTasks] = useLocalStorage<Task[]>('gateTasks', []);
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>('darkMode', false);
  const [showPaperModal, setShowPaperModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { 
    toasts, 
    removeToast, 
    showSuccess, 
    showError, 
    showWarning
  } = useToast();

  // Initialize topic statuses when papers are selected
  useEffect(() => {
    if (selectedPapers.length > 0) {
      const newTopicStatuses = { ...topicStatuses };
      let hasChanges = false;

      selectedPapers.forEach(paper => {
        if (!newTopicStatuses[paper] && syllabus[paper]) {
          newTopicStatuses[paper] = syllabus[paper].map((topic: string) => ({
            topic,
            status: 'Not Started' as const,
            difficulty: 'Moderate' as const,
            notes: ''
          }));
          hasChanges = true;
        }
      });

      if (hasChanges) {
        setTopicStatuses(newTopicStatuses);
      }
    }
  }, [selectedPapers, topicStatuses, setTopicStatuses]);

  // Show paper selection modal if no papers are selected
  useEffect(() => {
    setShowPaperModal(selectedPapers.length === 0);
  }, [selectedPapers]);

  // Apply dark mode
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', isDarkMode);
    }
  }, [isDarkMode]);

  const handlePaperSelection = (papers: string[]) => {
    setSelectedPapers(papers);
    setShowPaperModal(false);
  };

  const handleUpdateTopicStatus = (subject: string, topic: string, status: TopicStatus['status']) => {
    setTopicStatuses(prev => ({
      ...prev,
      [subject]: prev[subject].map(item =>
        item.topic === topic ? { ...item, status } : item
      )
    }));
  };

  const handleUpdateTopicDifficulty = (subject: string, topic: string, difficulty: TopicStatus['difficulty']) => {
    setTopicStatuses(prev => ({
      ...prev,
      [subject]: prev[subject].map(item =>
        item.topic === topic ? { ...item, difficulty } : item
      )
    }));
  };

  const handleUpdateTopicNotes = (subject: string, topic: string, notes: string) => {
    setTopicStatuses(prev => ({
      ...prev,
      [subject]: prev[subject].map(item =>
        item.topic === topic ? { ...item, notes } : item
      )
    }));
  };

  const handleAddTask = (task: Omit<Task, 'id'>) => {
    try {
      const newTask: Task = {
        ...task,
        id: Date.now()
      };
      setTasks(prev => [...prev, newTask]);
      showSuccess('Task Added', 'Your task has been successfully saved!');
    } catch {
      showError('Failed to Add Task', 'There was an error saving your task. Please try again.');
    }
  };

  const handleDeleteTask = (id: number) => {
    try {
      setTasks(prev => prev.filter(task => task.id !== id));
      showSuccess('Task Deleted', 'Task has been removed successfully.');
    } catch {
      showError('Failed to Delete Task', 'There was an error deleting the task. Please try again.');
    }
  };

  const handleImportData = (data: { selectedPapers: string[]; topicStatuses: TopicStatuses; tasks: Task[] }) => {
    try {
      setIsLoading(true);
      setSelectedPapers(data.selectedPapers);
      setTopicStatuses(data.topicStatuses);
      setTasks(data.tasks);
      showSuccess('Import Complete', 'Your data has been successfully imported!');
    } catch {
      showError('Import Failed', 'There was an error importing your data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    const confirmed = window.confirm('Are you sure you want to reset all data?');
    if (confirmed) {
      const doubleConfirmed = window.confirm(
        'This will permanently delete all your progress data, tasks, and settings. This action cannot be undone. Proceed?'
      );
      if (doubleConfirmed) {
        try {
          setIsLoading(true);
          setSelectedPapers([]);
          setTopicStatuses({});
          setTasks([]);
          setIsDarkMode(false);
          setShowPaperModal(true);
          showWarning('Data Reset Complete', 'All your data has been cleared successfully.');
        } catch {
          showError('Reset Failed', 'There was an error resetting your data. Please try again.');
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const getTitle = () => {
    if (selectedPapers.length === 0) return 'GATE 2026 Progress Tracker';
    const paperText = selectedPapers.filter(p => p !== 'GA').join(' & ');
    return `GATE 2026 Progress Tracker (${paperText})`;
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col items-center p-4">
      <ToastContainer toasts={toasts} onRemove={removeToast} />
      
      <PaperSelectionModal 
        isOpen={showPaperModal} 
        onSave={handlePaperSelection}
        onError={(message) => showError('Selection Error', message)}
      />

      <LoadingOverlay isLoading={isLoading} message="Updating your data...">
        <div className="w-full max-w-5xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
              {getTitle()}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Track your GATE preparation progress and manage study tasks
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-all duration-200 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span>{isDarkMode ? '☀️' : '🌙'}</span>
              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            <button
              onClick={handleReset}
              className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-200 transform hover:scale-105 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              aria-label="Reset all progress data"
            >
              <span>🔄</span>
              <span>Reset Data</span>
            </button>
          </div>
        </header>

        {selectedPapers.length > 0 && (
          <>
            <ProgressStats 
              selectedPapers={selectedPapers} 
              topicStatuses={topicStatuses}
              tasks={tasks}
            />
            
            <ProgressSummary 
              selectedPapers={selectedPapers} 
              topicStatuses={topicStatuses} 
            />

            <DataManager
              selectedPapers={selectedPapers}
              topicStatuses={topicStatuses}
              tasks={tasks}
              onImportData={handleImportData}
              onError={(message) => showError('Data Error', message)}
              onSuccess={(message) => showSuccess('Success', message)}
            />

            <TopicManagement
              selectedPapers={selectedPapers}
              topicStatuses={topicStatuses}
              onUpdateTopicStatus={handleUpdateTopicStatus}
              onUpdateTopicDifficulty={handleUpdateTopicDifficulty}
              onUpdateTopicNotes={handleUpdateTopicNotes}
            />

            <TaskManagement
              selectedPapers={selectedPapers}
              tasks={tasks}
              onAddTask={handleAddTask}
              onDeleteTask={handleDeleteTask}
              onError={(message) => showError('Task Error', message)}
            />
          </>
        )}
        </div>
      </LoadingOverlay>
    </div>
  );
}
