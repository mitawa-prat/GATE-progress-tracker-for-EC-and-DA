'use client';

import React, { useState } from 'react';
import { Task } from '../data/syllabus';

interface TaskManagementProps {
  selectedPapers: string[];
  tasks: Task[];
  onAddTask: (task: Omit<Task, 'id'>) => void;
  onDeleteTask: (id: number) => void;
}

export default function TaskManagement({ selectedPapers, tasks, onAddTask, onDeleteTask }: TaskManagementProps) {
  const [taskDate, setTaskDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [subject, setSubject] = useState(selectedPapers[0] || '');
  const [topic, setTopic] = useState('');
  const [status, setStatus] = useState<Task['status']>('Not Started');
  const [notes, setNotes] = useState('');

  React.useEffect(() => {
    if (selectedPapers.length > 0 && !subject) {
      setSubject(selectedPapers[0]);
    }
  }, [selectedPapers, subject]);

  const handleAddTask = () => {
    if (!taskDate || !topic || !subject) {
      alert('Please fill in Date, Subject, and Topic.');
      return;
    }

    const task: Omit<Task, 'id'> = {
      date: taskDate,
      subject,
      topic,
      status,
      notes
    };

    onAddTask(task);
    
    // Reset form
    setTaskDate(new Date().toISOString().split('T')[0]);
    setSubject(selectedPapers[0] || '');
    setTopic('');
    setStatus('Not Started');
    setNotes('');
    
    alert('Task added successfully!');
  };

  const sortedTasks = [...tasks].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="space-y-8">
      {/* Task Input Form */}
      <div>
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Add Daily Task/Notes</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Date
            </label>
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Subject
            </label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            >
              {selectedPapers.map(paper => (
                <option key={paper} value={paper}>{paper}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Topic
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white"
              placeholder="e.g., Linear Algebra, Python"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Completion Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as Task['status'])}
              className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            >
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-2 border rounded-md resize-none dark:bg-gray-600 dark:border-gray-500 dark:text-white"
              rows={4}
              placeholder="e.g., Struggled with FFT, need to revise"
            />
          </div>
          
          <div className="sm:col-span-2">
            <button
              onClick={handleAddTask}
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>

      {/* Task History */}
      <div>
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Task History</h2>
        <div className="max-h-96 overflow-y-auto border rounded-lg">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200 dark:bg-gray-600 sticky top-0">
              <tr>
                <th className="border p-2 text-left dark:text-white dark:border-gray-500">Date</th>
                <th className="border p-2 text-left dark:text-white dark:border-gray-500">Subject</th>
                <th className="border p-2 text-left dark:text-white dark:border-gray-500">Topic</th>
                <th className="border p-2 text-left dark:text-white dark:border-gray-500">Status</th>
                <th className="border p-2 text-left dark:text-white dark:border-gray-500">Notes</th>
                <th className="border p-2 text-left dark:text-white dark:border-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedTasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="border p-2 dark:text-white dark:border-gray-500">{task.date}</td>
                  <td className="border p-2 dark:text-white dark:border-gray-500">{task.subject}</td>
                  <td className="border p-2 dark:text-white dark:border-gray-500">{task.topic}</td>
                  <td className="border p-2 dark:text-white dark:border-gray-500">{task.status}</td>
                  <td className="border p-2 dark:text-white dark:border-gray-500">{task.notes}</td>
                  <td className="border p-2 dark:border-gray-500">
                    <button
                      onClick={() => onDeleteTask(task.id)}
                      className="text-red-600 dark:text-red-400 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {sortedTasks.length === 0 && (
                <tr>
                  <td colSpan={6} className="border p-4 text-center text-gray-500 dark:text-gray-400 dark:border-gray-500">
                    No tasks added yet. Add your first task above!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}