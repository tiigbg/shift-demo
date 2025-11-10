import { useNavigate } from 'react-router-dom';
import '../../App.css';

// Image URLs from Figma
const imgBackArrow = "/assets/images/d4b49403-fc68-4cff-bf80-3e1f7a773b6a.svg";

function SocialIntro() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      {/* Intro content section 1 */}
      <div className="intro-section intro-section-1">
        <p className="intro-text">
          När något händer i närområdet söker många information där den känns närmast. På plattformar som <strong>Facebook-grupper</strong> eller <strong>Flashback</strong> delas observationer och rykten ofta långt innan nyheterna hinner fram.
        </p>
      </div>

      {/* Intro content section 2 */}
      <div className="intro-section intro-section-2">
        <p className="intro-text">
          Den här typen av nätverk kan skapa gemenskap och snabb orientering, men också sprida felaktigheter och förstärka oro. Här får du uppleva hur information kan börja leva sitt eget liv.
        </p>
      </div>

      {/* Intro content section 3 */}
      <div className="intro-section intro-section-3">
        <p className="intro-text">
          När alla kan bidra blir det svårare att veta vad som stämmer. Hur skiljer vi mellan misstag och manipulation?
        </p>
      </div>

      {/* Back button */}
      <button className="intro-back-button" onClick={() => navigate('/')}>
        <img src={imgBackArrow} alt="Tillbaka" className="intro-back-icon" />
      </button>

      {/* Continue to prototype button */}
      <button className="intro-continue-button" onClick={() => navigate('/social')}>
        Till prototypen
      </button>
    </div>
  );
}

export default SocialIntro;
