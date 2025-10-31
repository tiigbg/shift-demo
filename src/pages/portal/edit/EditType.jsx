import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../App.css';
import btnQuadcopter from '../../../../Assets/Button quadcopter.png';
import btnFastvingad from '../../../../Assets/Button Fastvingad.png';
import btnBalloon from '../../../../Assets/Button Balloon.png';

const imgMenuIcon = "https://www.figma.com/api/mcp/asset/66002c8b-ae2c-49e1-a4bb-43e55f889a06";

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
          className={`type-option-image ${selectedType === 'quadrocopter' ? 'selected' : ''}`}
          onClick={() => setSelectedType('quadrocopter')}
        >
          <img src={btnQuadcopter} alt="Quadrocopter" className="type-button-image" />
        </button>

        <button
          className={`type-option-image ${selectedType === 'fastvingad' ? 'selected' : ''}`}
          onClick={() => setSelectedType('fastvingad')}
        >
          <img src={btnFastvingad} alt="Fastvingad" className="type-button-image" />
        </button>

        <button
          className={`type-option-image ${selectedType === 'ballong' ? 'selected' : ''}`}
          onClick={() => setSelectedType('ballong')}
        >
          <img src={btnBalloon} alt="Ballong" className="type-button-image" />
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
