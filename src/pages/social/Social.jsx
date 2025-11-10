import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

// Image URLs from Figma
const imgLogo = "/assets/images/c968a9c7-bac7-417d-9193-5037aa9f10ad.png";
const imgMenuIcon = "/assets/images/ab6ef216-6f37-4ca4-a087-8d6d9871662a.svg";
const imgBackArrow = "/assets/images/5b3716a4-05e8-40c3-a50d-713b779333cc.svg";
const imgPlusIcon = "/assets/images/678a6453-fe1f-4a74-be17-cb3de98fa3a5.svg";
const imgHeartIcon = "/assets/images/bc9d394b-ec21-439d-8759-437af4c946af.svg";
const imgSendIcon = "/assets/images/38394d9b-5b9a-445f-96a5-3c14ccd883c3.svg";

function Social() {
  const navigate = useNavigate();

  const [observations, setObservations] = useState([
    {
      id: 1,
      user: 'Ärlig Räka',
      message: 'Polisbåten är här ikväll igen...',
      time: '14:32',
      likes: 3
    },
    {
      id: 2,
      user: 'Nostalgisk Kråka',
      message: 'Bra att alla klagomål fått Polisen att dyka upp lite oftare',
      time: '14:32',
      likes: 3
    },
    {
      id: 3,
      user: 'Vaken Katt',
      message: 'Nu hör jag en helikopter, vågar någon gå ut och kolla?',
      time: '14:32',
      likes: 3
    }
  ]);

  const handleLike = (observationId) => {
    setObservations(observations.map(obs =>
      obs.id === observationId
        ? { ...obs, likes: obs.likes + 1 }
        : obs
    ));
  };

  return (
    <div className="app-container bg-white">
      {/* App Bar */}
      <div className="report-app-bar">
        <button className="menu-button" onClick={() => navigate('/')}>
          <img src={imgMenuIcon} alt="Menu" className="menu-icon" />
        </button>
        <h1 className="app-bar-title">Pågående Observationer</h1>
      </div>

      {/* Header with logo and location */}
      <div className="social-header">
        <img src={imgLogo} alt="Logo" className="social-logo" />
        <div className="social-location-info">
          <p className="social-time-location">10:45 - Göteborg</p>
          <p className="social-coordinates">Lat 57,71° N; Lon 11,97° E</p>
        </div>
        <div className="social-compass">N</div>
      </div>

      {/* Observations List */}
      <div className="observations-list">
        {observations.map((obs) => (
          <div key={obs.id} className="observation-card">
            <div className="observation-avatar">
              <span className="avatar-icon">👤</span>
            </div>
            <div className="observation-content">
              <div className="observation-text-content">
                <p className="observation-user-message">
                  <span className="observation-user-name">{obs.user}</span>
                  <br />
                  {obs.message}
                </p>
              </div>
              <div className="observation-actions">
                <span className="observation-time">{obs.time}</span>
                <div className="observation-buttons">
                  <button
                    className="observation-button"
                    onClick={() => handleLike(obs.id)}
                  >
                    Gilla
                  </button>
                  <button className="observation-button">Svara</button>
                </div>
                <div className="observation-likes">
                  <img src={imgHeartIcon} alt="Likes" className="likes-icon" />
                  <span>{obs.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Text input field */}
      <div className="social-input-container">
        <input
          type="text"
          placeholder="Skriv en kommentar"
          className="social-text-input"
        />
        <button className="social-send-button">
          <img src={imgSendIcon} alt="Send" className="send-icon" />
        </button>
      </div>

      {/* Bottom buttons */}
      <div className="social-bottom-buttons">
        <button className="social-action-button social-back-btn" onClick={() => navigate('/')}>
          <img src={imgBackArrow} alt="Back" className="button-icon" />
        </button>
        <button className="social-action-button social-contribute-btn" onClick={() => navigate('/report')}>
          <img src={imgPlusIcon} alt="Plus" className="button-icon-small" />
          <span>Bidra till rapport</span>
        </button>
      </div>
    </div>
  );
}

export default Social;
