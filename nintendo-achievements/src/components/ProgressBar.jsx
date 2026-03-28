import React from 'react';

export default function ProgressBar({ progress }) {
  return (
    <div className="progress-bg">
      <div className="progress-fill" style={{ width: `${progress}%` }}></div>
    </div>
  );
}