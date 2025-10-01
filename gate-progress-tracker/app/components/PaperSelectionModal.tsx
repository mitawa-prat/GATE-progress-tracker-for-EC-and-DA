'use client';

import React, { useState } from 'react';
import { syllabus, allowedCombinations } from '../data/syllabus';

interface PaperSelectionModalProps {
  isOpen: boolean;
  onSave: (papers: string[]) => void;
  onError?: (message: string) => void;
}

export default function PaperSelectionModal({ isOpen, onSave, onError }: PaperSelectionModalProps) {
  const [numPapers, setNumPapers] = useState<'1' | '2'>('1');
  const [paper1, setPaper1] = useState('');
  const [paper2, setPaper2] = useState('');

  const papers = Object.keys(syllabus).filter(p => p !== 'GA');

  const handleSave = () => {
    if (!paper1 || (numPapers === '2' && !paper2)) {
      onError?.('Please select all required papers.');
      return;
    }

    if (numPapers === '2' && !allowedCombinations[paper1]?.includes(paper2)) {
      onError?.('Invalid paper combination. Please select an allowed secondary paper.');
      return;
    }

    const selectedPapers = numPapers === '1' ? [paper1, 'GA'] : [paper1, paper2, 'GA'];
    onSave(selectedPapers);
  };

  const getSecondaryPaperOptions = () => {
    return allowedCombinations[paper1] || [];
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white dark:bg-gray-700 p-8 rounded-xl w-full max-w-lg mx-4 shadow-2xl transform transition-all">
        <div className="flex items-center justify-between mb-6">
          <h2 id="modal-title" className="text-2xl font-bold text-gray-900 dark:text-white">
            Select GATE 2026 Papers
          </h2>
          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
            <span className="text-blue-600 dark:text-blue-300 text-sm font-bold">📚</span>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Number of Papers
          </label>
          <select
            value={numPapers}
            onChange={(e) => {
              setNumPapers(e.target.value as '1' | '2');
              setPaper2('');
            }}
            className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white"
          >
            <option value="1">1 Paper</option>
            <option value="2">2 Papers</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Primary Paper
          </label>
          <select
            value={paper1}
            onChange={(e) => {
              setPaper1(e.target.value);
              setPaper2('');
            }}
            className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white"
          >
            <option value="">Select Primary Paper</option>
            {papers.map(paper => (
              <option key={paper} value={paper}>{paper}</option>
            ))}
          </select>
        </div>

        {numPapers === '2' && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Secondary Paper
            </label>
            <select
              value={paper2}
              onChange={(e) => setPaper2(e.target.value)}
              className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            >
              <option value="">Select Secondary Paper</option>
              {getSecondaryPaperOptions().map(paper => (
                <option key={paper} value={paper}>{paper}</option>
              ))}
            </select>
          </div>
        )}

        <button
          onClick={handleSave}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Save paper selection and continue"
        >
          Continue with Selected Papers
        </button>
      </div>
    </div>
  );
}