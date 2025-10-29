import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const imgVector1 = "https://www.figma.com/api/mcp/asset/bc2284a1-49cd-4f7e-ae49-8c8379a01c0c";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/af2a5511-a69e-4de5-8729-16f39981628b";
const imgQuadrocopter = "https://www.figma.com/api/mcp/asset/32f8aa43-e927-494f-9dfe-685a6db30757";
const imgVector2 = "https://www.figma.com/api/mcp/asset/64ccff83-b271-44c6-b92d-d2d44426dc66";

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
    <div className="app-container bg-white">
      {/* App Bar */}
      <div className="report-app-bar">
        <button className="back-button-small" onClick={() => navigate('/')}>
          ←
        </button>
        <h1 className="app-bar-title">Skapa ny rapport</h1>
      </div>

      {/* Instructions */}
      <div className="report-instruction-top">
        <p>Rikta pilen mot observationen</p>
      </div>

      {/* Compass */}
      <div className="compass-container">
        <div className="compass-circle">
          <img src={imgEllipse1} alt="Compass" className="compass-image" />
          <img src={imgVector1} alt="Arrow" className="compass-arrow" />
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
        <button className="continue-button" onClick={handleContinue}>
          Fortsätt
        </button>
      )}
    </div>
  );
}

export default ReportStart;
