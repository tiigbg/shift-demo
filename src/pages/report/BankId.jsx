import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const imgBankId = "https://www.figma.com/api/mcp/asset/34618171-eb16-452e-aa2a-d4be9665eb30";

function BankId() {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate BankID verification
    const timer = setTimeout(() => {
      navigate('/report/thanks');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="app-container bg-white">
      {/* App Bar */}
      <div className="report-app-bar">
        <div className="app-bar-title">BankID</div>
      </div>

      {/* BankID Logo */}
      <div className="bankid-logo">
        <img src={imgBankId} alt="BankID" />
      </div>

      {/* Instructions */}
      <div className="bankid-instructions">
        <p>
          Öppna BankID-appen på din mobil för att identifiera dig.
        </p>
      </div>

      {/* Loading */}
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-text">Väntar på BankID...</p>
      </div>

      <button className="cancel-button" onClick={() => navigate('/report/thanks')}>
        Avbryt
      </button>
    </div>
  );
}

export default BankId;
