import { useNavigate } from 'react-router-dom';
import '../../App.css';

// Updated Figma assets
const imgLogo = "https://www.figma.com/api/mcp/asset/3032dc75-5ef3-4fcd-93d8-c47fbb1602a7";
const imgMenuIcon = "https://www.figma.com/api/mcp/asset/d2552609-178b-48ae-abe3-53fa44b2002c";
const imgShieldIcon = "https://www.figma.com/api/mcp/asset/1177541c-d936-4a2d-a397-e4b6ba35e843";
const imgBankIdIcon = "https://www.figma.com/api/mcp/asset/e470ef79-b61c-415b-b1a9-053f6a235858";

function Verify() {
  const navigate = useNavigate();

  const handleVerify = () => {
    navigate('/report/bankid');
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

      {/* Logo */}
      <div className="sending-logo">
        <img src={imgLogo} alt="SHIFT" />
      </div>

      {/* Location info */}
      <div className="sending-location">
        <p className="location-direction">N</p>
        <p className="location-details">
          10:45 - Göteborg<br />
          <span className="location-coords">Lat 57,71° N; Lon 11,97° E</span>
        </p>
      </div>

      {/* Shield icon */}
      <div className="verify-shield-icon">
        <img src={imgShieldIcon} alt="" />
      </div>

      {/* Message */}
      <div className="verify-message">
        <p>
          För att kunna lita på din rapport behöver vi veta vem du är.
        </p>
        <p>&nbsp;</p>
        <p>
          Verifiera dig med BankId för att styrka din trovärdighet.
        </p>
      </div>

      {/* Button */}
      <button className="verify-button" onClick={handleVerify}>
        <img src={imgBankIdIcon} alt="" className="button-icon" />
        <span>Verifiera med BankId</span>
      </button>
    </div>
  );
}

export default Verify;
