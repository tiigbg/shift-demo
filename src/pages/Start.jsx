import { Link } from 'react-router-dom';
import '../App.css';

// Image URLs from Figma - Updated
const imgQuadrocopter = "/assets/images/a9a098c7-9d11-429e-91da-5f24a4608541.svg";
const imgHelp = "/assets/images/d21b29f0-21bd-4e5a-82ad-3cd7cf90d1cd.svg";

function Start() {
  return (
    <div className="app-container">
      {/* Logo/Drone Icon */}
      <div className="header">
        <img src={imgQuadrocopter} alt="SHIFT Logo" className="drone-icon" />
      </div>

      {/* Title */}
      <div className="title-section">
        <h1 className="title">SHIFT</h1>
      </div>

      {/* Description */}
      <div className="description">
        I denna "klickbara prototyp" kan du utforska olika aspekter av hur en rapporterings-app för medborgare skulle kunna se ut.
      </div>

      {/* Navigation Buttons with Help Icons */}
      <div className="button-row">
        <div className="button-container report-button">
          <Link to="/report" className="nav-button">
            <span className="button-text">1. Civil rapportering</span>
          </Link>
        </div>
        <Link to="/report-intro" className="help-icon-container help-1" title="Hjälp">
          <img src={imgHelp} alt="Help" className="help-icon" />
        </Link>
      </div>

      <div className="button-row">
        <div className="button-container portal-button">
          <Link to="/portal" className="nav-button">
            <span className="button-text">2. Användarportal</span>
          </Link>
        </div>
        <Link to="/portal-intro" className="help-icon-container help-2" title="Hjälp">
          <img src={imgHelp} alt="Help" className="help-icon" />
        </Link>
      </div>

      <div className="button-row">
        <div className="button-container dashboard-button">
          <Link to="/dashboard" className="nav-button">
            <span className="button-text">3. Pågående händelser</span>
          </Link>
        </div>
        <Link to="/dashboard-intro" className="help-icon-container help-3" title="Hjälp">
          <img src={imgHelp} alt="Help" className="help-icon" />
        </Link>
      </div>

      <div className="button-row">
        <div className="button-container notification-button">
          <Link to="/notification" className="nav-button">
            <span className="button-text">4. Varning</span>
          </Link>
        </div>
        <Link to="/notification-intro" className="help-icon-container help-4" title="Hjälp">
          <img src={imgHelp} alt="Help" className="help-icon" />
        </Link>
      </div>

      <div className="button-row">
        <div className="button-container social-button">
          <Link to="/social" className="nav-button">
            <span className="button-text">5. Sociala nätverk</span>
          </Link>
        </div>
        <Link to="/social-intro" className="help-icon-container help-5" title="Hjälp">
          <img src={imgHelp} alt="Help" className="help-icon" />
        </Link>
      </div>
    </div>
  );
}

export default Start;
