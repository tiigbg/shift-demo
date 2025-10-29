import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const imgLogo = "https://www.figma.com/api/mcp/asset/5011ef80-e37b-4abb-9cdb-97090c41dd0c";

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
    <div className="app-container bg-white">
      {/* App Bar */}
      <div className="report-app-bar">
        <div className="app-bar-title">Skickar rapport</div>
      </div>

      {/* Logo */}
      <div className="sending-logo">
        <img src={imgLogo} alt="SHIFT" />
      </div>

      {/* Headings */}
      <div className="sending-content">
        <h2 className="sending-subtitle">SHIFT</h2>
        <h1 className="sending-title">Skapa ny rapport</h1>
      </div>

      {/* Loading indicator */}
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-text">Skickar din rapport...</p>
      </div>
    </div>
  );
}

export default Sending;
