import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

// Updated Figma assets
const imgIcon = "https://www.figma.com/api/mcp/asset/2a9c091d-d1ec-4200-a6ce-aa59fd20836a";
const imgMenuIcon = "https://www.figma.com/api/mcp/asset/51de5c7c-d087-4410-9fff-2f0d6cc3d21c";
const imgArrowIcon = "https://www.figma.com/api/mcp/asset/e87cbb20-20a6-4374-8a07-7034d7c0e70a";
const imgQuadrocopter = "https://www.figma.com/api/mcp/asset/332682ae-f6f0-482e-8683-29db6e99b315";
const imgVector1 = "https://www.figma.com/api/mcp/asset/a0fc3af2-d22a-4048-aeb6-120cd46ea7f3";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/4d8256df-ce38-476d-81ef-85ff43cc0d1e";
const imgVector2 = "https://www.figma.com/api/mcp/asset/461edf9d-8bb5-4104-93fd-ff246f57e4b8";

function ReportStart() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null);

  const handleDroneSelect = (type) => {
    setSelectedType(type);
  };

  const handleContinue = () => {
    if (selectedType) {
      navigate('/report/sending');
    }
  };

  return (
    <div className="app-container report-start-bg">
      {/* App Bar */}
      <div className="report-app-bar">
        <button className="back-button-small" onClick={() => navigate('/')}>
          <img src={imgMenuIcon} alt="Menu" className="menu-icon" />
        </button>
        <h1 className="app-bar-title">Skapa ny rapport</h1>
      </div>

      {/* Instructions */}
      <div className="report-instruction-top">
        <p>Rikta pilen mot observationen</p>
      </div>

      {/* Compass with rotated arrow */}
      <div className="compass-container">
        <div className="compass-circle">
          <img src={imgEllipse1} alt="Compass" className="compass-image" />
          <img src={imgVector1} alt="Arrow" className="compass-arrow-rotated" />
          <span className="compass-n">N</span>
          <span className="compass-s">S</span>
        </div>
      </div>

      {/* Bottom instruction */}
      <div className="report-instruction-bottom">
        <p>Välj typ av observation</p>
      </div>

      {/* Drone type selection */}
      <div className="drone-selection">
        <button
          className={`drone-button ${selectedType === 'air' ? 'selected' : ''}`}
          onClick={() => handleDroneSelect('air')}
        >
          <img src={imgQuadrocopter} alt="Flygande drönare" className="drone-icon-air" />
          <span>Flygande drönare</span>
        </button>

        <button
          className={`drone-button ${selectedType === 'marine' ? 'selected' : ''}`}
          onClick={() => handleDroneSelect('marine')}
        >
          <img src={imgVector2} alt="Marin drönare" className="drone-icon-marine" />
          <span>Marin drönare</span>
        </button>
      </div>

      {selectedType && (
        <button className="report-continue-button" onClick={handleContinue}>
          <img src={imgArrowIcon} alt="" className="button-arrow-icon" />
          <span>Rapportera</span>
        </button>
      )}
    </div>
  );
}

export default ReportStart;
