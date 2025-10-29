import { useNavigate } from 'react-router-dom';
import '../../App.css';

const imgLogo = "https://www.figma.com/api/mcp/asset/5011ef80-e37b-4abb-9cdb-97090c41dd0c";

function Verify() {
  const navigate = useNavigate();

  const handleVerify = () => {
    navigate('/report/bankid');
  };

  return (
    <div className="app-container bg-white">
      {/* App Bar */}
      <div className="report-app-bar">
        <div className="app-bar-title">Verifiera</div>
      </div>

      {/* Logo */}
      <div className="sending-logo">
        <img src={imgLogo} alt="SHIFT" />
      </div>

      {/* Headings */}
      <div className="sending-content">
        <h2 className="sending-subtitle">SHIFT</h2>
        <h1 className="sending-title">Skapa ny rapport</h1>
      </div>

      {/* Verification icon */}
      <div className="verify-icon-container">
        <div className="verify-icon">✓</div>
      </div>

      {/* Message */}
      <div className="verify-message">
        <p>
          Din rapport har tagits emot och kommer att granskas. För att öka trovärdigheten
          och möjliggöra återkoppling, rekommenderar vi att du verifierar din identitet.
        </p>
      </div>

      {/* Button */}
      <button className="verify-button" onClick={handleVerify}>
        Verifiera med BankID
      </button>
    </div>
  );
}

export default Verify;
