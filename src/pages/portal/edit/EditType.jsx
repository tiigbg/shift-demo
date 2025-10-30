import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../App.css';

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
          className={`type-option ${selectedType === 'quadrocopter' ? 'selected' : ''}`}
          onClick={() => setSelectedType('quadrocopter')}
        >
          <div className="type-icon">🛸</div>
          <span className="type-label">Quadrocopter</span>
        </button>

        <button
          className={`type-option ${selectedType === 'passivflygel' ? 'selected' : ''}`}
          onClick={() => setSelectedType('passivflygel')}
        >
          <div className="type-icon">✈️</div>
          <span className="type-label">Passivflygel</span>
        </button>

        <button
          className={`type-option ${selectedType === 'ballong' ? 'selected' : ''}`}
          onClick={() => setSelectedType('ballong')}
        >
          <div className="type-icon">🎈</div>
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
