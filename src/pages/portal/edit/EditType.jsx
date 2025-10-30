import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../App.css';

const imgMenuIcon = "https://www.figma.com/api/mcp/asset/66002c8b-ae2c-49e1-a4bb-43e55f889a06";
const imgQuadrocopter = "https://www.figma.com/api/mcp/asset/381bf3e0-bccb-40ba-b5bc-8772ab729ab4";
const imgFixedWing = "https://www.figma.com/api/mcp/asset/2c5c0155-d28c-4fed-b73b-fbab4152418e";
const imgBalloon = "https://www.figma.com/api/mcp/asset/599b573f-04ef-48b6-8aef-978b65bc8ee1";

function EditType() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null);

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
        Välj den kategori som bäst beskriver din observation.
      </div>

      {/* Type options */}
      <div className="edit-type-options">
        <button
          className={`type-option ${selectedType === 'quadrocopter' ? 'selected' : ''}`}
          onClick={() => setSelectedType('quadrocopter')}
        >
          <div className="type-icon">
            <img src={imgQuadrocopter} alt="Quadrocopter" />
          </div>
          <span className="type-label">Quadrocopter</span>
        </button>

        <button
          className={`type-option ${selectedType === 'fastvingad' ? 'selected' : ''}`}
          onClick={() => setSelectedType('fastvingad')}
        >
          <div className="type-icon">
            <img src={imgFixedWing} alt="Fastvingad" />
          </div>
          <span className="type-label">Fastvingad</span>
        </button>

        <button
          className={`type-option ${selectedType === 'ballong' ? 'selected' : ''}`}
          onClick={() => setSelectedType('ballong')}
        >
          <div className="type-icon">
            <img src={imgBalloon} alt="Ballong" />
          </div>
          <span className="type-label">Ballong</span>
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

export default EditType;
