'use client';

import React from 'react';
import { TopicStatuses, TopicStatus, commonTopics } from '../data/syllabus';

interface TopicManagementProps {
  selectedPapers: string[];
  topicStatuses: TopicStatuses;
  onUpdateTopicStatus: (subject: string, topic: string, status: TopicStatus['status']) => void;
  onUpdateTopicDifficulty: (subject: string, topic: string, difficulty: TopicStatus['difficulty']) => void;
  onUpdateTopicNotes: (subject: string, topic: string, notes: string) => void;
}

export default function TopicManagement({
  selectedPapers,
  topicStatuses,
  onUpdateTopicStatus,
  onUpdateTopicDifficulty,
  onUpdateTopicNotes
}: TopicManagementProps) {
  const getSubjectColor = (subject: string, index: number) => {
    if (subject === 'GA') return 'text-yellow-600 dark:text-yellow-400';
    return index === 0 ? 'text-blue-600 dark:text-blue-400' : 'text-green-600 dark:text-green-400';
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Syllabus Topics</h2>
      
      <div className="space-y-6">
        {selectedPapers.map((subject, index) => (
          <div key={subject}>
            <h3 className={`text-lg font-medium mb-3 ${getSubjectColor(subject, index)}`}>
              {subject}
            </h3>
            
            <div className="overflow-x-auto">
              <div className="max-h-96 overflow-y-auto border rounded-lg">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-200 dark:bg-gray-600 sticky top-0">
                    <tr>
                      <th className="border p-2 text-left dark:text-white dark:border-gray-500">Topic</th>
                      <th className="border p-2 text-left dark:text-white dark:border-gray-500">Tag</th>
                      <th className="border p-2 text-left dark:text-white dark:border-gray-500">Difficulty</th>
                      <th className="border p-2 text-left dark:text-white dark:border-gray-500">Status</th>
                      <th className="border p-2 text-left dark:text-white dark:border-gray-500">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topicStatuses[subject]?.map((item, itemIndex) => {
                      const isCommon = commonTopics.includes(item.topic);
                      
                      return (
                        <tr key={itemIndex} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                          <td className="border p-2 dark:text-white dark:border-gray-500 font-medium">
                            {item.topic}
                          </td>
                          <td className="border p-2 dark:border-gray-500">
                            {isCommon && (
                              <span 
                                className="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs font-medium"
                                aria-label="Common topic across multiple papers"
                              >
                                Common
                              </span>
                            )}
                          </td>
                          <td className="border p-2 dark:border-gray-500">
                            <select
                              value={item.difficulty}
                              onChange={(e) => onUpdateTopicDifficulty(subject, item.topic, e.target.value as TopicStatus['difficulty'])}
                              className="p-2 border rounded-md w-full dark:bg-gray-600 dark:border-gray-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                              aria-label={`Set difficulty level for ${item.topic}`}
                            >
                              <option value="Easy">Easy</option>
                              <option value="Moderate">Moderate</option>
                              <option value="Hard">Hard</option>
                            </select>
                          </td>
                          <td className="border p-2 dark:border-gray-500">
                            <select
                              value={item.status}
                              onChange={(e) => onUpdateTopicStatus(subject, item.topic, e.target.value as TopicStatus['status'])}
                              className="p-2 border rounded-md w-full dark:bg-gray-600 dark:border-gray-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                              aria-label={`Set completion status for ${item.topic}`}
                            >
                              <option value="Not Started">Not Started</option>
                              <option value="In Progress">In Progress</option>
                              <option value="Completed">Completed</option>
                            </select>
                          </td>
                          <td className="border p-2 dark:border-gray-500">
                            <textarea
                              value={item.notes}
                              onChange={(e) => onUpdateTopicNotes(subject, item.topic, e.target.value)}
                              className="p-2 border rounded-md w-full resize-none dark:bg-gray-600 dark:border-gray-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                              rows={2}
                              placeholder="Add notes (e.g., resources, doubts)"
                              aria-label={`Add notes for ${item.topic}`}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}