'use client';

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface ProgressChartProps {
  subject: string;
  progress: number;
}

export default function ProgressChart({ subject, progress }: ProgressChartProps) {
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

  return (
    <div className="chart-container w-48 h-32 mx-auto">
      <Doughnut data={data} options={options} />
    </div>
  );
}