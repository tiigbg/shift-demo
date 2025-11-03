import { useNavigate } from 'react-router-dom';
import '../../App.css';

// Updated Figma assets
const imgLogo = "/assets/images/ca3de0f3-8525-44fa-8576-c43226061b9d.png";
const imgMenuIcon = "/assets/images/d2c0f8f8-ac31-40a6-8b01-8ad58ae92130.svg";
const imgCheckIcon = "/assets/images/85e0fb63-6924-4cb2-bf9b-cb3593a3cd7f.svg";
const imgProfileIcon = "/assets/images/1dc0251b-463c-414e-9795-1b9f22a5bd7c.svg";

function Thanks() {
  const navigate = useNavigate();

  return (
    <div className="app-container report-start-bg">
      {/* App Bar */}
      <div className="report-app-bar">
        <button className="menu-button" onClick={() => navigate('/')}>
          <img src={imgMenuIcon} alt="Menu" className="menu-icon" />
        </button>
        <h1 className="app-bar-title">Skapa ny rapport</h1>
      </div>

      {/* Logo */}
      <div className="sending-logo">
        <img src={imgLogo} alt="SHIFT" />
      </div>

      {/* Location info */}
      <div className="sending-location">
        <p className="location-direction">N</p>
        <p className="location-details">
          10:45 - Göteborg<br />
          <span className="location-coords">Lat 57,71° N; Lon 11,97° E</span>
        </p>
      </div>

      {/* Check/Success icon */}
      <div className="thanks-check-icon">
        <img src={imgCheckIcon} alt="" />
      </div>

      {/* Message */}
      <div className="thanks-message">
        <p className="thanks-title">Tack för ditt bidrag!</p>
        <p>&nbsp;</p>
        <p className="thanks-text">
          Du kan se dina observationer och lägga till mer information i din profil.
        </p>
      </div>

      {/* Button */}
      <button className="thanks-profile-button" onClick={() => navigate('/portal')}>
        <img src={imgProfileIcon} alt="" className="button-icon" />
        <span>Gå till min profil</span>
      </button>
    </div>
  );
}

export default Thanks;
