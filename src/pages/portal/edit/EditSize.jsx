import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../App.css';

const imgMenuIcon = "https://www.figma.com/api/mcp/asset/66002c8b-ae2c-49e1-a4bb-43e55f889a06";
const imgDroneSmall = "https://www.figma.com/api/mcp/asset/f6f946ec-d222-4ffe-9813-9983716be25d";
const imgPersonSmall = "https://www.figma.com/api/mcp/asset/ff65ec5e-2bb7-44f7-9701-4871414f416d";
const imgDroneMedium = "https://www.figma.com/api/mcp/asset/42cf58a5-4181-4bf8-9f57-bc87d3827878";
const imgPersonMedium = "https://www.figma.com/api/mcp/asset/ae41b810-3cb9-4e64-bdf4-c02c970f2a8d";
const imgDroneLarge = "https://www.figma.com/api/mcp/asset/f588d67f-c717-48da-9837-b53cf5736624";
const imgPersonLarge = "https://www.figma.com/api/mcp/asset/5b127ab9-d0b7-40b4-87a9-f7a0ba9b8540";

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
          <div className="size-comparison">
            <img src={imgDroneSmall} alt="Small drone" className="drone-icon" />
            <img src={imgPersonSmall} alt="Person" className="person-icon" />
            <div className="size-measurement">170cm</div>

          </div>
          <span className="size-label">Liten</span>
        </button>

        <button
          className={`size-option ${selectedSize === 'medium' ? 'selected' : ''}`}
          onClick={() => setSelectedSize('medium')}
        >
          <div className="size-comparison size-comparison-medium">
            <img src={imgDroneMedium} alt="Medium drone" className="drone-icon" />
            <img src={imgPersonMedium} alt="Person" className="person-icon" />
          </div>
          <span className="size-label">Medel</span>
        </button>

        <button
          className={`size-option ${selectedSize === 'large' ? 'selected' : ''}`}
          onClick={() => setSelectedSize('large')}
        >
          <div className="size-comparison">
            <img src={imgDroneLarge} alt="Large drone" className="drone-icon" />
            <img src={imgPersonLarge} alt="Person" className="person-icon" />
          </div>
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
