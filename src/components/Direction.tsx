import React from 'react';
import './Direction.css';

const Direction: React.FC = () => {
  return (
    <div className="direction">
      <div className="direction-header">
        <h2>🧭 Direction & Navigation</h2>
        <p>AR-powered navigation coming soon!</p>
      </div>

      <div className="direction-content">
        <div className="ar-placeholder">
          <div className="ar-icon">📱</div>
          <h3>Augmented Reality Navigation</h3>
          <p>This tab will feature advanced AR functionality for:</p>
          <ul>
            <li>📍 Real-time location tracking</li>
            <li>🎯 AR waypoint visualization</li>
            <li>🗺️ Interactive 3D maps</li>
            <li>🎪 Immersive navigation experience</li>
          </ul>
          <div className="coming-soon">
            <span>🚧 Coming Soon 🚧</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Direction; 