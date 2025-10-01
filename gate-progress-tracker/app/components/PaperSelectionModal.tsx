'use client';

import React, { useState } from 'react';
import { syllabus, allowedCombinations } from '../data/syllabus';

interface PaperSelectionModalProps {
  isOpen: boolean;
  onSave: (papers: string[]) => void;
}

export default function PaperSelectionModal({ isOpen, onSave }: PaperSelectionModalProps) {
  const [numPapers, setNumPapers] = useState<'1' | '2'>('1');
  const [paper1, setPaper1] = useState('');
  const [paper2, setPaper2] = useState('');

  const papers = Object.keys(syllabus).filter(p => p !== 'GA');

  const handleSave = () => {
    if (!paper1 || (numPapers === '2' && !paper2)) {
      alert('Please select all required papers.');
      return;
    }

    if (numPapers === '2' && !allowedCombinations[paper1]?.includes(paper2)) {
      alert('Invalid paper combination. Please select an allowed secondary paper.');
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg w-full max-w-md mx-4">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Select GATE 2026 Papers</h2>
        
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
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Save Selection
        </button>
      </div>
    </div>
  );
}