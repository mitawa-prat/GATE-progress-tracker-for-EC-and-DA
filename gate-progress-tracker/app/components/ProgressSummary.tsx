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

  const getSubjectColor = (subject: string, index: number) => {
    if (subject === 'GA') return 'yellow';
    return index === 0 ? 'blue' : 'green';
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Progress Summary</h2>
      
      {/* Progress Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        {selectedPapers.map((subject, index) => {
          const progress = calculateProgress(subject);
          const colorClass = getSubjectColor(subject, index);
          
          return (
            <div 
              key={subject} 
              className={`bg-${colorClass}-100 dark:bg-${colorClass === 'yellow' ? 'yellow-900' : colorClass === 'blue' ? 'blue-900' : 'green-900'} p-4 rounded-md`}
            >
              <h3 className={`font-medium text-${colorClass}-800 dark:text-${colorClass}-200`}>
                {subject} Completion
              </h3>
              <p className={`text-lg text-${colorClass}-600 dark:text-${colorClass}-300`}>
                {progress}%
              </p>
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