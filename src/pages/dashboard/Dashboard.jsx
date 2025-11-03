import { useNavigate } from 'react-router-dom';
import '../../App.css';

const imgQuadrocopter = "/assets/images/8255f79b-59f1-43f8-804d-bc4d769c6a17.svg";
const imgWarning = "/assets/images/e5cf7063-aafa-4799-b8de-46fe66a7d40b.svg";
const imgMenuIcon = "/assets/images/66002c8b-ae2c-49e1-a4bb-43e55f889a06.svg";

function Dashboard() {
  const navigate = useNavigate();

  const observations = [
    {
      id: 1,
      title: 'UAV i område (11 observationer)',
      location: 'Tuve',
      hasWarning: true,
      route: '/dashboard/map/tuve'
    },
    {
      id: 2,
      title: 'UAV i rörelse (23 observationer)',
      location: 'Längs Göta älv',
      hasWarning: true,
      route: '/dashboard/map/gota'
    }
  ];

  return (
    <div className="app-container bg-white">
      {/* App Bar */}
      <div className="report-app-bar">
        <button className="menu-button" onClick={() => navigate('/')}>
          <img src={imgMenuIcon} alt="Menu" className="menu-icon" />
        </button>
        <h1 className="app-bar-title">Pågående händelser</h1>
      </div>

      {/* Observations List */}
      <div className="observations-list">
        {observations.map((obs) => (
          <div
            key={obs.id}
            className="observation-item"
            onClick={() => navigate(obs.route)}
          >
            <div className="observation-icon">
              <img src={imgQuadrocopter} alt="Drone" />
            </div>
            <div className="observation-content">
              <div className="observation-title">{obs.title}</div>
              <div className="observation-location">{obs.location}</div>
            </div>
            {obs.hasWarning && (
              <div className="observation-warning">
                <img src={imgWarning} alt="Warning" className="observation-warning-icon" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Action Button */}
      <button className="dashboard-action-button" onClick={() => navigate('/')}>
        ← Gå tillbaka
      </button>
    </div>
  );
}

export default Dashboard;
