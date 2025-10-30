import { useNavigate } from 'react-router-dom';
import '../../App.css';

function Notification() {
  const navigate = useNavigate();

  const handleOpenApp = () => {
    navigate('/dashboard');
  };

  return (
    <div className="app-container notification-overlay-bg">
      {/* Phone home screen background */}
      <div className="phone-home-screen">
        {/* Simulated phone status bar */}
        <div className="phone-status-bar">
          <span className="phone-time">9:41</span>
          <div className="phone-status-icons">
            <span>📶</span>
            <span>📡</span>
            <span>🔋</span>
          </div>
        </div>

        {/* App icons grid */}
        <div className="phone-app-grid">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="phone-app-icon">
              <div className="app-icon-placeholder"></div>
            </div>
          ))}
        </div>

        {/* Phone dock */}
        <div className="phone-dock">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="phone-dock-icon">
              <div className="dock-icon-placeholder"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Notification Card Overlay */}
      <div className="notification-card-overlay">
        <div className="notification-card">
          <div className="notification-card-header">
            <div className="notification-logo">SHIFT</div>
            <span className="notification-time">NU</span>
          </div>

          <h2 className="notification-card-title">Pågående Situation</h2>

          <p className="notification-card-message">
            Rör dig mot säkerhet och förbered person för vidare observationer
          </p>

          <button className="notification-open-button" onClick={handleOpenApp}>
            Öppna appen
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notification;
