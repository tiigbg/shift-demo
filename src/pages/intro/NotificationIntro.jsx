import { useNavigate } from 'react-router-dom';
import '../../App.css';

// Image URLs from Figma
const imgBackArrow = "https://www.figma.com/api/mcp/asset/a396e331-2af5-473c-b1bf-465441b55c4e";

function NotificationIntro() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      {/* Intro content section 1 */}
      <div className="intro-section intro-section-1">
        <p className="intro-text">
          I kriser kan notiser rädda liv. Appar som <strong>112</strong> och <strong>Krisinformation</strong> varnar när något händer i närheten och hjälper människor att hålla sig trygga och informerade.
        </p>
      </div>

      {/* Intro content section 2 */}
      <div className="intro-section intro-section-2">
        <p className="intro-text">
          I andra system, som <strong>SMSlivräddare</strong>, kan frivilliga få larm och kallas in när deras kompetens behövs. Här får du prova hur det kan kännas att få en notis om något du kanske borde agera på.
        </p>
      </div>

      {/* Intro content section 3 */}
      <div className="intro-section intro-section-3">
        <p className="intro-text">
          När information blir ett uppdrag förändras rollen som civil. Kan man vara både civil och del av försvaret samtidigt?
        </p>
      </div>

      {/* Back button */}
      <button className="intro-back-button" onClick={() => navigate('/')}>
        <img src={imgBackArrow} alt="Tillbaka" className="intro-back-icon" />
      </button>

      {/* Continue to prototype button */}
      <button className="intro-continue-button" onClick={() => navigate('/notification')}>
        Till prototypen
      </button>
    </div>
  );
}

export default NotificationIntro;
