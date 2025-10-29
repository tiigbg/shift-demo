import { Link } from 'react-router-dom';
import '../App.css';

// Image URLs from Figma
const imgQuadrocopter = "https://www.figma.com/api/mcp/asset/5011ef80-e37b-4abb-9cdb-97090c41dd0c";
const imgHelp = "https://www.figma.com/api/mcp/asset/a9a6818f-39eb-4f6f-b176-f20e412db1d3";

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

      {/* Navigation Buttons */}
      <div className="button-container report-button">
        <Link to="/report" className="nav-button">
          <span className="button-text">1. Civil rapportering</span>
        </Link>
      </div>

      <div className="button-container portal-button">
        <Link to="/portal" className="nav-button">
          <span className="button-text">2. Användarportal</span>
        </Link>
      </div>

      <div className="button-container dashboard-button">
        <Link to="/dashboard" className="nav-button">
          <span className="button-text">3. Pågående händelser</span>
        </Link>
      </div>

      <div className="button-container notification-button">
        <Link to="/notification" className="nav-button">
          <span className="button-text">4. Varning</span>
        </Link>
      </div>

      <div className="button-container social-button">
        <Link to="/social" className="nav-button">
          <span className="button-text">5. Sociala nätverk</span>
        </Link>
      </div>

      {/* Help Icons */}
      <button className="help-icon-container help-1" title="Hjälp">
        <img src={imgHelp} alt="Help" className="help-icon" />
      </button>

      <button className="help-icon-container help-2" title="Hjälp">
        <img src={imgHelp} alt="Help" className="help-icon" />
      </button>

      <button className="help-icon-container help-3" title="Hjälp">
        <img src={imgHelp} alt="Help" className="help-icon" />
      </button>

      <button className="help-icon-container help-4" title="Hjälp">
        <img src={imgHelp} alt="Help" className="help-icon" />
      </button>

      <button className="help-icon-container help-5" title="Hjälp">
        <img src={imgHelp} alt="Help" className="help-icon" />
      </button>
    </div>
  );
}

export default Start;
