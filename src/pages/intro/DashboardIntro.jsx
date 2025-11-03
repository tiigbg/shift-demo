import { useNavigate } from 'react-router-dom';
import '../../App.css';

// Image URLs from Figma
const imgBackArrow = "/assets/images/26617771-0358-49d4-9cf0-7a1cdf57117c.svg";

function DashboardIntro() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      {/* Intro content section 1 */}
      <div className="intro-section intro-section-1">
        <p className="intro-text">
          Kartor har länge hjälpt oss att förstå händelser i realtid. Under jordbävningen i Haiti 2010 användes <strong>Ushahidi</strong> för att låta civila bygga en gemensam lägesbild.
        </p>
      </div>

      {/* Intro content section 2 */}
      <div className="intro-section intro-section-2">
        <p className="intro-text">
          I dag utvecklar aktörer som <strong>Teracom</strong> system som samlar in och analyserar data från många källor. Här får du prova hur en karta kan växa fram ur användarnas rapporter.
        </p>
      </div>

      {/* Intro content section 3 */}
      <div className="intro-section intro-section-3">
        <p className="intro-text">
          En sådan översikt kan ge trygghet, men också makt. Hur mycket insyn ska en användare ha i ett system som kan påverka liv och död?
        </p>
      </div>

      {/* Back button */}
      <button className="intro-back-button" onClick={() => navigate('/')}>
        <img src={imgBackArrow} alt="Tillbaka" className="intro-back-icon" />
      </button>

      {/* Continue to prototype button */}
      <button className="intro-continue-button" onClick={() => navigate('/dashboard')}>
        Till prototypen
      </button>
    </div>
  );
}

export default DashboardIntro;
