import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../App.css';

const imgMenuIcon = "https://www.figma.com/api/mcp/asset/66002c8b-ae2c-49e1-a4bb-43e55f889a06";

function EditSize() {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(null);

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
        Välj den storlek som bäst beskriver din observation.
      </div>

      {/* Size options */}
      <div className="edit-size-options">
        <button
          className={`size-option ${selectedSize === 'small' ? 'selected' : ''}`}
          onClick={() => setSelectedSize('small')}
        >
          <div className="size-icon size-small">🛸</div>
          <span className="size-label">Liten</span>
        </button>

        <button
          className={`size-option ${selectedSize === 'medium' ? 'selected' : ''}`}
          onClick={() => setSelectedSize('medium')}
        >
          <div className="size-icon size-medium">🛸 👤</div>
          <span className="size-label">Medel</span>
        </button>

        <button
          className={`size-option ${selectedSize === 'large' ? 'selected' : ''}`}
          onClick={() => setSelectedSize('large')}
        >
          <div className="size-icon size-large">🛸</div>
          <span className="size-label">Stor</span>
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

export default EditSize;
