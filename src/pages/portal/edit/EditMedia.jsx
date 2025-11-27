import { useNavigate } from 'react-router-dom';
import '../../../App.css';
const iconPen = "/assets/images/icon pen.png";
const iconCamera = "/assets/images/Icon camera.png";
const iconMic = "/assets/images/Icon mic.png";

const imgMenuIcon = "/assets/images/66002c8b-ae2c-49e1-a4bb-43e55f889a06.svg";

function EditMedia() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/portal');
  };

  const handleSave = () => {
    navigate('/portal');
  };

  return (
    <div className="app-container bg-white">
      {/* App Bar */}
      <div className="report-app-bar">
        <button className="back-button-small" onClick={handleBack}>
          <img src={imgMenuIcon} alt="Back" className="menu-icon" />
        </button>
        <h1 className="app-bar-title">Idag 10:45</h1>
      </div>

      {/* Instructions */}
      <div className="edit-instructions">
        Denna observation saknar tillägg...
      </div>

      {/* Media options */}
      <div className="edit-media-options">
        <button className="media-option" onClick={() => alert('Lägg till beskrivning')}>
          <img src={iconPen} alt="Beskrivning" className="media-icon-img" />
          <span className="media-label">Lägg till beskrivning</span>
        </button>

        <button className="media-option" onClick={() => alert('Lägg till video')}>
          <img src={iconCamera} alt="Video" className="media-icon-img" />
          <span className="media-label">Lägg till video</span>
        </button>

        <button className="media-option" onClick={() => alert('Lägg till ljudinspelning')}>
          <img src={iconMic} alt="Ljud" className="media-icon-img" />
          <span className="media-label">Lägg till ljudinspelning</span>
        </button>
      </div>

      {/* Bottom buttons */}
      <div className="edit-bottom-buttons">
        <button className="edit-back-button" onClick={handleBack}>
          ←
        </button>
        <button className="edit-save-button" onClick={handleSave}>
          ✓ Spara
        </button>
      </div>
    </div>
  );
}

export default EditMedia;
