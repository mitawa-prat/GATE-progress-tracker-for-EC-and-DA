'use client';

import React, { useState, useEffect } from 'react';
import PaperSelectionModal from './components/PaperSelectionModal';
import ProgressSummary from './components/ProgressSummary';
import TopicManagement from './components/TopicManagement';
import TaskManagement from './components/TaskManagement';
import { useLocalStorage } from './hooks/useLocalStorage';
import { syllabus, TopicStatuses, TopicStatus, Task } from './data/syllabus';

export default function Home() {
  const [selectedPapers, setSelectedPapers] = useLocalStorage<string[]>('selectedPapers', []);
  const [topicStatuses, setTopicStatuses] = useLocalStorage<TopicStatuses>('gateTopicStatuses', {});
  const [tasks, setTasks] = useLocalStorage<Task[]>('gateTasks', []);
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>('darkMode', false);
  const [showPaperModal, setShowPaperModal] = useState(false);

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
    const newTask: Task = {
      ...task,
      id: Date.now()
    };
    setTasks(prev => [...prev, newTask]);
  };

  const handleDeleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all data?')) {
      if (confirm('This will reset all statuses, difficulties, notes, tasks, paper selection, and dark mode settings. Proceed?')) {
        setSelectedPapers([]);
        setTopicStatuses({});
        setTasks([]);
        setIsDarkMode(false);
        setShowPaperModal(true);
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
      <PaperSelectionModal 
        isOpen={showPaperModal} 
        onSave={handlePaperSelection} 
      />

      <div className="w-full max-w-5xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
            {getTitle()}
          </h1>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
              {isDarkMode ? 'Disable Night Mode' : 'Enable Night Mode'}
            </button>
            <button
              onClick={handleReset}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors w-full sm:w-auto"
            >
              Reset All Data
            </button>
          </div>
        </div>

        {selectedPapers.length > 0 && (
          <>
            <ProgressSummary 
              selectedPapers={selectedPapers} 
              topicStatuses={topicStatuses} 
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
            />
          </>
        )}
      </div>
    </div>
  );
}
