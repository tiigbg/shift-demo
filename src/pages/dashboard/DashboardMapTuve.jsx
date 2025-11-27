import { useNavigate } from 'react-router-dom';
import '../../App.css';
const mapImage = "/assets/images/Situation Tuve.png";

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
        ← Gå tillbaka
      </button>
    </div>
  );
}

export default DashboardMapTuve;
