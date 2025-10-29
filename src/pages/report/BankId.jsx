import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

// Updated Figma assets
const imgBankId = "https://www.figma.com/api/mcp/asset/3bbd26e0-5789-4cbe-8b4b-bc7760c16175";
const imgBankIdIconBtn = "https://www.figma.com/api/mcp/asset/aeb41408-bcca-4b88-9c4e-f84335a386e9";

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
    <div className="app-container report-start-bg">
      {/* BankID Logo/Image */}
      <div className="bankid-image">
        <img src={imgBankId} alt="BankID" />
      </div>

      {/* Button */}
      <button className="bankid-verify-button" onClick={() => navigate('/report/thanks')}>
        <img src={imgBankIdIconBtn} alt="" className="button-icon" />
        <span>Verifiera din identitet</span>
      </button>
    </div>
  );
}

export default BankId;
