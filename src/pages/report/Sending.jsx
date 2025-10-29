import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

// Updated Figma assets
const imgLogo = "https://www.figma.com/api/mcp/asset/645398cb-b2e4-41cc-9a82-87c2f922a700";
const imgMenuIcon = "https://www.figma.com/api/mcp/asset/3245c943-803c-4d12-8253-6b5badfd1037";
const imgLoadingContainer = "https://www.figma.com/api/mcp/asset/38c9cb4f-2d75-4c82-a285-6c171a87696c";
const imgLoadingShape = "https://www.figma.com/api/mcp/asset/21bdd5e0-e1c3-47d1-9e4b-ee1fc6ae18f7";

function Sending() {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate sending delay
    const timer = setTimeout(() => {
      navigate('/report/verify');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="app-container report-start-bg">
      {/* App Bar */}
      <div className="report-app-bar">
        <button className="back-button-small" onClick={() => navigate('/')}>
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

      {/* Loading indicator */}
      <div className="sending-loading-container">
        <div className="sending-loading-indicator">
          <img src={imgLoadingContainer} alt="" className="loading-container-img" />
          <img src={imgLoadingShape} alt="" className="loading-shape-img" />
        </div>
      </div>

      {/* Loading text */}
      <div className="sending-loading-text">
        <p>Din observation skickas...</p>
      </div>
    </div>
  );
}

export default Sending;
