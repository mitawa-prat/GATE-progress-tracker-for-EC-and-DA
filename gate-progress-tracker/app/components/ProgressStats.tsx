'use client';

import React from 'react';
import { TopicStatuses, Task } from '../data/syllabus';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: string;
  color: 'blue' | 'green' | 'yellow' | 'purple';
  trend?: 'up' | 'down' | 'neutral';
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, subtitle, icon, color, trend }) => {
  const colorClasses = {
    blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
    green: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800',
    yellow: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800',
    purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800'
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'up': return '↗️';
      case 'down': return '↘️';
      case 'neutral': return '➡️';
      default: return '';
    }
  };

  return (
    <div className={`p-4 rounded-xl border-2 ${colorClasses[color]} transition-all duration-200 hover:shadow-lg hover:scale-105`}>
      <div className="flex items-center justify-between mb-2">
        <div className="text-2xl">{icon}</div>
        {trend && <div className="text-sm">{getTrendIcon()}</div>}
      </div>
      <div className="space-y-1">
        <p className="text-sm opacity-75 font-medium">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
        {subtitle && <p className="text-xs opacity-60">{subtitle}</p>}
      </div>
    </div>
  );
};

interface ProgressStatsProps {
  selectedPapers: string[];
  topicStatuses: TopicStatuses;
  tasks: Task[];
}

export const ProgressStats: React.FC<ProgressStatsProps> = ({ selectedPapers, topicStatuses, tasks }) => {
  const calculateStats = () => {
    let totalTopics = 0;
    let completedTopics = 0;
    let inProgressTopics = 0;
    let hardTopics = 0;
    let completedHardTopics = 0;

    selectedPapers.forEach(paper => {
      if (topicStatuses[paper]) {
        totalTopics += topicStatuses[paper].length;
        topicStatuses[paper].forEach(topic => {
          if (topic.status === 'Completed') completedTopics++;
          if (topic.status === 'In Progress') inProgressTopics++;
          if (topic.difficulty === 'Hard') {
            hardTopics++;
            if (topic.status === 'Completed') completedHardTopics++;
          }
        });
      }
    });

    const overallProgress = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    const hardTopicsProgress = hardTopics > 0 ? Math.round((completedHardTopics / hardTopics) * 100) : 0;

    // Task statistics
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.status === 'Completed').length;
    const recentTasks = tasks.filter(task => {
      const taskDate = new Date(task.date);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return taskDate >= weekAgo;
    }).length;

    return {
      totalTopics,
      completedTopics,
      inProgressTopics,
      overallProgress,
      hardTopics,
      completedHardTopics,
      hardTopicsProgress,
      totalTasks,
      completedTasks,
      recentTasks
    };
  };

  const stats = calculateStats();

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 dark:text-white flex items-center">
        <span className="mr-2">📊</span>
        Study Statistics
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatsCard
          title="Overall Progress"
          value={`${stats.overallProgress}%`}
          subtitle={`${stats.completedTopics}/${stats.totalTopics} topics`}
          icon="🎯"
          color="blue"
          trend={stats.overallProgress > 50 ? 'up' : stats.overallProgress > 25 ? 'neutral' : 'down'}
        />
        
        <StatsCard
          title="In Progress"
          value={stats.inProgressTopics}
          subtitle="topics being studied"
          icon="📚"
          color="yellow"
        />
        
        <StatsCard
          title="Hard Topics"
          value={`${stats.hardTopicsProgress}%`}
          subtitle={`${stats.completedHardTopics}/${stats.hardTopics} completed`}
          icon="🔥"
          color="purple"
          trend={stats.hardTopicsProgress > 30 ? 'up' : 'neutral'}
        />
        
        <StatsCard
          title="Tasks This Week"
          value={stats.recentTasks}
          subtitle={`${stats.completedTasks}/${stats.totalTasks} total tasks`}
          icon="✅"
          color="green"
        />
      </div>
    </div>
  );
};

export default ProgressStats;