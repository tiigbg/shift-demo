import { useNavigate } from 'react-router-dom';
import '../../App.css';
import mapImage from '../../../Assets/Situation Tuve.png';

const imgBackIcon = "https://www.figma.com/api/mcp/asset/343eb2f8-3cfe-46d5-a50e-072af2bba964";

function DashboardMapTuve() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      {/* Full Screen Map Image with Overlays */}
      <div className="fullscreen-map-container">
        <img src={mapImage} alt="Karta Tuve" className="fullscreen-map-image" />
      </div>

      {/* Back Button Overlay */}
      <button className="map-back-button" onClick={() => navigate('/dashboard')}>
        <img src={imgBackIcon} alt="Back" className="back-icon-small" />
        <span>Gå tillbaka</span>
      </button>
    </div>
  );
}

export default DashboardMapTuve;
