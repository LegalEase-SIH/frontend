// src/components/PercentageCircle.js
import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';

const Percentagecircle = ({ percentage }) => {
  return (
    <div className="w-96 h-96">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={{
          root: { width: '100%', height: '100%' },
          path: { stroke: `#352F44`, strokeLinecap: 'butt' },
          text: { fill: '#352F44', fontSize: '20px' },
        }}
      />
    </div>
  );
};

export default Percentagecircle;
