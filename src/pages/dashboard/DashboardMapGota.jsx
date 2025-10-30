import { useNavigate } from 'react-router-dom';
import '../../App.css';
import mapImage from '../../../Assets/Situation Gäta Älv.png';

const imgBackIcon = "https://www.figma.com/api/mcp/asset/8d55e340-aa8f-4e31-8e0a-8bd5d0d3b84d";

function DashboardMapGota() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      {/* Full Screen Map Image with Overlays */}
      <div className="fullscreen-map-container">
        <img src={mapImage} alt="Karta Göta älv" className="fullscreen-map-image" />
      </div>

      {/* Back Button Overlay */}
      <button className="map-back-button" onClick={() => navigate('/dashboard')}>
        <img src={imgBackIcon} alt="Back" className="back-icon-small" />
        <span>Gå tillbaka</span>
      </button>
    </div>
  );
}

export default DashboardMapGota;
