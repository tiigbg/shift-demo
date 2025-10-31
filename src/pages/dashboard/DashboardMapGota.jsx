import { useNavigate } from 'react-router-dom';
import '../../App.css';
import mapImage from '../../../Assets/Situation Gäta Älv.png';

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
        ← Gå tillbaka
      </button>
    </div>
  );
}

export default DashboardMapGota;
