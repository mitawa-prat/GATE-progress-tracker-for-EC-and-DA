'use client';

import React from 'react';
import ProgressChart from './ProgressChart';
import { TopicStatuses } from '../data/syllabus';

interface ProgressSummaryProps {
  selectedPapers: string[];
  topicStatuses: TopicStatuses;
}

export default function ProgressSummary({ selectedPapers, topicStatuses }: ProgressSummaryProps) {
  const calculateProgress = (subject: string) => {
    if (!topicStatuses[subject]) return 0;
    const totalTopics = topicStatuses[subject].length;
    const completedTopics = topicStatuses[subject].filter(item => item.status === 'Completed').length;
    return totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  };

  const getSubjectColors = (subject: string, index: number) => {
    if (subject === 'GA') {
      return {
        bg: 'bg-yellow-100 dark:bg-yellow-900',
        text: 'text-yellow-800 dark:text-yellow-200',
        progress: 'text-yellow-600 dark:text-yellow-300'
      };
    }
    if (index === 0) {
      return {
        bg: 'bg-blue-100 dark:bg-blue-900',
        text: 'text-blue-800 dark:text-blue-200',
        progress: 'text-blue-600 dark:text-blue-300'
      };
    }
    return {
      bg: 'bg-green-100 dark:bg-green-900',
      text: 'text-green-800 dark:text-green-200',
      progress: 'text-green-600 dark:text-green-300'
    };
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Progress Summary</h2>
      
      {/* Progress Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        {selectedPapers.map((subject, index) => {
          const progress = calculateProgress(subject);
          const colors = getSubjectColors(subject, index);
          
          return (
            <div 
              key={subject} 
              className={`${colors.bg} p-4 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md`}
            >
              <h3 className={`font-medium ${colors.text} mb-2`}>
                {subject} Completion
              </h3>
              <p className={`text-2xl font-bold ${colors.progress}`}>
                {progress}%
              </p>
              <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-500 ${
                    subject === 'GA' ? 'bg-yellow-500' : 
                    index === 0 ? 'bg-blue-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress Charts */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {selectedPapers.map((subject) => (
          <ProgressChart 
            key={subject} 
            subject={subject} 
            progress={calculateProgress(subject)} 
          />
        ))}
      </div>
    </div>
  );
}