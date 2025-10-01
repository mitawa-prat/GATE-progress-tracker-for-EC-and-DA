'use client';

import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';
import { LoadingSpinner } from './Loading';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface ProgressChartProps {
  subject: string;
  progress: number;
  isLoading?: boolean;
}

export default function ProgressChart({ subject, progress, isLoading = false }: ProgressChartProps) {
  const [chartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setChartLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);
  const data = {
    labels: ['Completed', 'Remaining'],
    datasets: [{
      data: [progress, 100 - progress],
      backgroundColor: ['#36a2eb', '#e5e7eb'],
      borderWidth: 1,
      borderColor: '#fff'
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
      easing: 'easeInOutQuad' as const
    },
    plugins: {
      legend: { 
        position: 'top' as const, 
        labels: { 
          font: { size: 10 },
          color: '#374151'
        } 
      },
      title: { 
        display: true, 
        text: `${subject} Progress`, 
        font: { size: 12 },
        color: '#374151'
      }
    }
  };

  if (isLoading || !chartLoaded) {
    return (
      <div className="chart-container w-48 h-32 mx-auto flex items-center justify-center">
        <div className="flex flex-col items-center space-y-2">
          <LoadingSpinner size="md" />
          <p className="text-xs text-gray-500 dark:text-gray-400">Loading chart...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="chart-container w-48 h-32 mx-auto transition-all duration-300 hover:scale-105">
      <Doughnut data={data} options={options} />
    </div>
  );
}