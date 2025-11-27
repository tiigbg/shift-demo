import { useNavigate } from 'react-router-dom';
import '../../App.css';

const imgMenuIcon = "/assets/images/66002c8b-ae2c-49e1-a4bb-43e55f889a06.svg";

function Response1() {
  const navigate = useNavigate();

  return (
    <div className="app-container bg-white">
      {/* App Bar */}
      <div className="report-app-bar">
        <button className="menu-button" onClick={() => navigate('/')}>
          <img src={imgMenuIcon} alt="Menu" className="menu-icon" />
        </button>
        <h1 className="app-bar-title">10 okt, 18:53</h1>
      </div>

      {/* Title */}
      <div className="response-title">
        <h2>Tack för din rapport!</h2>
      </div>

      {/* Message Box */}
      <div className="response-message-box">
        <p>
          Tack för din rapport om misstänkt drönaraktivitet.
        </p>
        <p>
          Den observation du skickade in avsåg en drönare, och vi uppskattar ditt engagemang.
        </p>
        <p>
          Din rapportering har bidragit till att vi snabbt kunde uppmärksamma situationen och vidta nödvändiga åtgärder.
        </p>
      </div>

      {/* Back Button */}
      <button className="response-back-button" onClick={() => navigate('/portal')}>
        <span>←</span>
      </button>
    </div>
  );
}

export default Response1;
