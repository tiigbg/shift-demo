import { useNavigate } from 'react-router-dom';
import '../../App.css';

const imgWarningIcon = "/Assets/icon varning.png";

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

      {/* Notification Card Overlay - First notification */}
      <div className="notification-card-overlay" style={{top: '20px'}}>
        <div className="notification-card">
          <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px'}}>
            <img src={imgWarningIcon} alt="Warning" style={{width: '40px', height: '40px', flexShrink: 0}} />
            <h2 className="notification-card-title" style={{margin: 0, paddingTop: '8px'}}>Drönarvarning (fred)</h2>
          </div>

          <p className="notification-card-message" style={{marginLeft: '52px', marginBottom: '16px'}}>
            Drönaraktivitet har observerats i området. Håll uppe ögon och rapportera avvikande beteende.
          </p>

          <button className="notification-open-button" onClick={handleOpenApp}>
            Öppna appen
          </button>
        </div>
      </div>

      {/* Second notification */}
      <div className="notification-card-overlay" style={{top: '250px'}}>
        <div className="notification-card">
          <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px'}}>
            <img src={imgWarningIcon} alt="Warning" style={{width: '40px', height: '40px', flexShrink: 0}} />
            <h2 className="notification-card-title" style={{margin: 0, paddingTop: '8px'}}>Drönarvarning (krig)</h2>
          </div>

          <p className="notification-card-message" style={{marginLeft: '52px', marginBottom: '16px'}}>
            Identifierad drönaraktivitet med potentiell risk. Sök omedelbart skydd inomhus och undvik öppna området.
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
