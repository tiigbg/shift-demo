import { useNavigate } from 'react-router-dom';
import '../../App.css';

const imgLogo = "https://www.figma.com/api/mcp/asset/5011ef80-e37b-4abb-9cdb-97090c41dd0c";

function Thanks() {
  const navigate = useNavigate();

  return (
    <div className="app-container bg-white">
      {/* App Bar */}
      <div className="report-app-bar">
        <div className="app-bar-title">Tack!</div>
      </div>

      {/* Logo */}
      <div className="sending-logo">
        <img src={imgLogo} alt="SHIFT" />
      </div>

      {/* Headings */}
      <div className="sending-content">
        <h2 className="sending-subtitle">SHIFT</h2>
        <h1 className="sending-title">Tack för din rapport!</h1>
      </div>

      {/* Success icon */}
      <div className="success-icon-container">
        <div className="success-icon">✓</div>
      </div>

      {/* Message */}
      <div className="thanks-message">
        <p>
          Din rapport har skickats in och kommer att behandlas. Du har nu verifierat
          din identitet och kan följa statusen på din rapport under "Mina rapporter".
        </p>
        <p className="thanks-submessage">
          Vi uppskattar ditt bidrag till samhällets säkerhet.
        </p>
      </div>

      {/* Buttons */}
      <div className="thanks-buttons">
        <button className="secondary-button" onClick={() => navigate('/portal')}>
          Gå till Mina rapporter
        </button>
        <button className="primary-button" onClick={() => navigate('/')}>
          Tillbaka till start
        </button>
      </div>
    </div>
  );
}

export default Thanks;
