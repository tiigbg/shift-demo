import { useNavigate } from 'react-router-dom';
import '../../App.css';

// Image URLs from Figma
const imgBackArrow = "/assets/images/d04482a0-675a-4b27-8d7f-eb648251a60c.svg";

function PortalIntro() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      {/* Intro content section 1 */}
      <div className="intro-section intro-section-1">
        <p className="intro-text">
          Civila rapporterar inte bara i kris, de bidrar också i vardagen. Tjänster som <strong>Tyck Till</strong> och <strong>Artportalen</strong> låter människor dela observationer i sitt närområde, från trasiga trottoarer till nya växtarter.
        </p>
      </div>

      {/* Intro content section 2 */}
      <div className="intro-section intro-section-2">
        <p className="intro-text">
          I det här flödet får du prova hur en användarportal kan låta dig se, komplettera och följa upp dina egna rapporter, och hur det kan påverka viljan att fortsätta bidra.
        </p>
      </div>

      {/* Intro content section 3 */}
      <div className="intro-section intro-section-3">
        <p className="intro-text">
          Feedback och synlighet kan skapa engagemang, men också nya frågor. Hur belönar man hjälpsamt beteende utan att skapa tävlan eller riskbeteenden?
        </p>
      </div>

      {/* Back button */}
      <button className="intro-back-button" onClick={() => navigate('/')}>
        <img src={imgBackArrow} alt="Tillbaka" className="intro-back-icon" />
      </button>

      {/* Continue to prototype button */}
      <button className="intro-continue-button" onClick={() => navigate('/portal')}>
        Till prototypen
      </button>
    </div>
  );
}

export default PortalIntro;
