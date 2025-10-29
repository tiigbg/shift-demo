import { useNavigate } from 'react-router-dom';
import '../../App.css';

// Image URLs from Figma
const imgBackArrow = "https://www.figma.com/api/mcp/asset/c25e6f14-08c9-49ff-87f0-123279198e11";

function ReportIntro() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      {/* Intro content section 1 */}
      <div className="intro-section intro-section-1">
        <p className="intro-text">
          2022, under Rysslands attacker mot Ukraina, började missiler och drönare flyga så lågt att radar inte alltid kunde upptäcka dem. Människor på marken såg dem först.
        </p>
      </div>

      {/* Intro content section 2 */}
      <div className="intro-section intro-section-2">
        <p className="intro-text">
          För att hantera det utvecklades appen <strong>ePPO</strong>, där civila snabbt kunde rapportera observationer till luftförsvaret. Här får du prova ett liknande flöde, hur det kan kännas att vara en del av ett sådant system.
        </p>
      </div>

      {/* Intro content section 3 */}
      <div className="intro-section intro-section-3">
        <p className="intro-text">
          När många rapporterar samtidigt ökar chanserna att upptäcka hot, men också risken för fel och falsklarm. Är det bättre med för mycket data än för lite, även om hälften är fel?
        </p>
      </div>

      {/* Back button */}
      <button className="intro-back-button" onClick={() => navigate('/')}>
        <img src={imgBackArrow} alt="Tillbaka" className="intro-back-icon" />
      </button>

      {/* Continue to prototype button */}
      <button className="intro-continue-button" onClick={() => navigate('/report')}>
        Till prototypen
      </button>
    </div>
  );
}

export default ReportIntro;
