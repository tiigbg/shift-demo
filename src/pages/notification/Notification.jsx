import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const imgMenuIcon = "https://www.figma.com/api/mcp/asset/66002c8b-ae2c-49e1-a4bb-43e55f889a06";

function Notification() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const handleSubmit = () => {
    if (selectedOption) {
      navigate('/notification/confirmation');
    }
  };

  return (
    <div className="app-container bg-white">
      {/* App Bar */}
      <div className="report-app-bar">
        <button className="menu-button" onClick={() => navigate('/')}>
          <img src={imgMenuIcon} alt="Menu" className="menu-icon" />
        </button>
        <h1 className="app-bar-title">Mina Tjänster</h1>
      </div>

      {/* Service Card */}
      <div className="service-card">
        <div className="service-header">
          <div className="service-avatar">A</div>
          <h3 className="service-title">Civil rapportering</h3>
        </div>

        <div className="service-content">
          <p className="service-description">
            Har du gått utbildning i grundläggande civil rapportering och vill bidra
            med din kompetens till andra? Här kan du anmäla dig för att vara tillgänglig
            om något händer där du befinner dig.
          </p>

          <button className="service-action-button">
            Anmäl ditt intresse
          </button>
        </div>
      </div>

      {/* Alternative: Notification Settings */}
      <div className="notification-settings">
        <h3 className="settings-title">Notifieringsinställningar</h3>
        <p className="settings-description">
          Välj vilka typer av varningar du vill ta emot:
        </p>

        <div className="radio-group">
          <label className="radio-option">
            <input
              type="radio"
              name="notification"
              value="all"
              checked={selectedOption === 'all'}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <span>Alla varningar och observationer</span>
          </label>

          <label className="radio-option">
            <input
              type="radio"
              name="notification"
              value="urgent"
              checked={selectedOption === 'urgent'}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <span>Endast brådskande varningar</span>
          </label>

          <label className="radio-option">
            <input
              type="radio"
              name="notification"
              value="local"
              checked={selectedOption === 'local'}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <span>Endast i mitt område</span>
          </label>

          <label className="radio-option">
            <input
              type="radio"
              name="notification"
              value="none"
              checked={selectedOption === 'none'}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <span>Inga notifieringar</span>
          </label>
        </div>

        <div className="notification-buttons">
          <button className="secondary-button" onClick={() => navigate('/')}>
            Avbryt
          </button>
          <button
            className={`primary-button ${!selectedOption ? 'disabled' : ''}`}
            onClick={handleSubmit}
            disabled={!selectedOption}
          >
            Spara
          </button>
        </div>
      </div>

      <button className="back-button" onClick={() => navigate('/')}>
        Klar
      </button>
    </div>
  );
}

export default Notification;
