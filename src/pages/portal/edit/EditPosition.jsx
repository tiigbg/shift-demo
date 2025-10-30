import { useNavigate } from 'react-router-dom';
import '../../../App.css';

const imgMap = "https://www.figma.com/api/mcp/asset/3e8c5f8a-9b2a-4c8e-8f7e-5a6d4c9b2e1f";
const imgMenuIcon = "https://www.figma.com/api/mcp/asset/66002c8b-ae2c-49e1-a4bb-43e55f889a06";

function EditPosition() {
  const navigate = useNavigate();

  const handleSave = () => {
    navigate('/portal');
  };

  const handleBack = () => {
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
        Dra eller tryck för att ändra position
      </div>

      {/* Map placeholder - In a real app, this would be an interactive map */}
      <div className="edit-map-container">
        <div className="edit-map-placeholder">
          {/* Map would go here */}
          <div className="map-marker">
            <div className="marker-pin"></div>
          </div>
        </div>
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

export default EditPosition;
