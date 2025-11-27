import { useNavigate } from 'react-router-dom';
import '../../App.css';

const imgMenuIcon = "/assets/images/66002c8b-ae2c-49e1-a4bb-43e55f889a06.svg";

function Response2() {
  const navigate = useNavigate();

  return (
    <div className="app-container bg-white">
      {/* App Bar */}
      <div className="report-app-bar">
        <button className="menu-button" onClick={() => navigate('/')}>
          <img src={imgMenuIcon} alt="Menu" className="menu-icon" />
        </button>
        <h1 className="app-bar-title">15 Sept, 11:24</h1>
      </div>

      {/* Title */}
      <div className="response-title">
        <h2>Tack för din rapport!</h2>
      </div>

      {/* Message Box */}
      <div className="response-message-box">
        <p>
          Tack för din rapport om misstänkt drönaraktivitet. Efter genomgång kan vi bekräfta att det du observerade inte var en drönare, utan ljuspunkter från en Starlink-satellitkonstellation. Dessa satelliter för sig i en rak formation över himlen och kan ibland misstas för drönare på hög höjd.
        </p>
        <p>
          Vi uppskattar att du tog dig tid att rapportera händelsen. Om du i framtiden observerar ett objekt som förändrar höjd, riktning eller hastighet på ett sätt som tyder på manövrering nära marken, kan det vara en indikation på drönaraktivitet. Vid osäkerhet är du alltid välkommen att skicka in en rapport.
        </p>
      </div>

      {/* Back Button */}
      <button className="response-back-button" onClick={() => navigate('/portal')}>
        <span>←</span>
      </button>
    </div>
  );
}

export default Response2;
