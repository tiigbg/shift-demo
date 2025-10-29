import { useNavigate } from 'react-router-dom';
import '../../App.css';

const imgMap = "https://www.figma.com/api/mcp/asset/31c85e50-7fa9-4b18-b531-d3fc16566e34";

function DashboardMap() {
  const navigate = useNavigate();

  const dronePins = [
    { id: 1, x: 109, y: 129, count: 11 },
    { id: 2, x: 69, y: 365, count: 23 }
  ];

  return (
    <div className="app-container bg-white">
      {/* App Bar */}
      <div className="report-app-bar">
        <button className="back-button-small" onClick={() => navigate('/dashboard')}>
          ←
        </button>
        <h1 className="app-bar-title">Situationsöversikt</h1>
      </div>

      {/* Map Container */}
      <div className="map-container">
        <div className="map-background">
          {/* Placeholder for map - in real app would use MapBox or Google Maps */}
          <div className="map-placeholder">
            <p>Karta över Göteborg</p>
            <p className="map-subtitle">Visar drönare i området</p>
          </div>
        </div>

        {/* Drone pins */}
        {dronePins.map((pin) => (
          <div
            key={pin.id}
            className="drone-pin"
            style={{ left: `${pin.x}px`, top: `${pin.y}px` }}
          >
            <div className="drone-pin-icon">🚁</div>
            <div className="drone-pin-count">{pin.count}</div>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <button className="map-action-button" onClick={() => navigate('/report')}>
        Rapportera observation
      </button>
    </div>
  );
}

export default DashboardMap;
