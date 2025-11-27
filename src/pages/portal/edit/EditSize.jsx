import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../App.css';
const btnSmall = "/assets/images/Button scale small.png";
const btnMedium = "/assets/images/Button scale Medium.png";
const btnBig = "/assets/images/Button scale Big.png";

const imgMenuIcon = "/assets/images/66002c8b-ae2c-49e1-a4bb-43e55f889a06.svg";

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
          className={`size-option-image ${selectedSize === 'small' ? 'selected' : ''}`}
          onClick={() => setSelectedSize('small')}
        >
          <img src={btnSmall} alt="Liten" className="size-button-image" />
        </button>

        <button
          className={`size-option-image ${selectedSize === 'medium' ? 'selected' : ''}`}
          onClick={() => setSelectedSize('medium')}
        >
          <img src={btnMedium} alt="Medel" className="size-button-image" />
        </button>

        <button
          className={`size-option-image ${selectedSize === 'large' ? 'selected' : ''}`}
          onClick={() => setSelectedSize('large')}
        >
          <img src={btnBig} alt="Stor" className="size-button-image" />
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
