import { useState, useEffect } from 'react';
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
const imgDownArrow = "https://www.figma.com/api/mcp/asset/13011251-ae1f-4cb1-ad04-35f1188d41f3"; // Arrow between texts

function ReportStart() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null);
  const [heading, setHeading] = useState(0);
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    // Request permission for iOS 13+ devices
    const requestPermission = async () => {
      if (typeof DeviceOrientationEvent !== 'undefined' &&
          typeof DeviceOrientationEvent.requestPermission === 'function') {
        try {
          const permission = await DeviceOrientationEvent.requestPermission();
          if (permission === 'granted') {
            setPermissionGranted(true);
          }
        } catch (error) {
          console.log('Permission denied:', error);
        }
      } else {
        // Non-iOS devices or older iOS versions
        setPermissionGranted(true);
      }
    };

    requestPermission();
  }, []);

  useEffect(() => {
    if (!permissionGranted) return;

    const handleOrientation = (event) => {
      // Use alpha for compass heading (0-360 degrees)
      // alpha: rotation around z-axis
      let compassHeading = event.alpha;

      // For iOS devices, use webkitCompassHeading if available
      if (event.webkitCompassHeading) {
        compassHeading = event.webkitCompassHeading;
      }

      if (compassHeading !== null) {
        setHeading(compassHeading);
      }
    };

    window.addEventListener('deviceorientation', handleOrientation);

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, [permissionGranted]);

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
        <button className="menu-button" onClick={() => navigate('/')}>
          <img src={imgMenuIcon} alt="Menu" className="menu-icon" />
        </button>
        <h1 className="app-bar-title">Skapa ny rapport</h1>
      </div>

      {/* Arrow between title and instruction */}
      <div className="report-down-arrow">
        <img src={imgDownArrow} alt="" className="down-arrow-icon" />
      </div>

      {/* Instructions */}
      <div className="report-instruction-top">
        <p>Rikta pilen mot observationen</p>
      </div>

      {/* Interactive Compass with gyroscope */}
      <div className="compass-container">
        <div className="compass-circle" style={{ transform: `rotate(${heading}deg)` }}>
          <img src={imgEllipse1} alt="Compass" className="compass-image" />
          <span className="compass-n">N</span>
          <span className="compass-s">S</span>
          <img src={imgVector1} alt="Arrow" className="compass-arrow-rotating" />
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
