import { useNavigate } from 'react-router-dom';
import '../../App.css';

const imgQuadrocopter = "https://www.figma.com/api/mcp/asset/8255f79b-59f1-43f8-804d-bc4d769c6a17";
const imgWarning = "https://www.figma.com/api/mcp/asset/e5cf7063-aafa-4799-b8de-46fe66a7d40b";
const imgMenuIcon = "https://www.figma.com/api/mcp/asset/66002c8b-ae2c-49e1-a4bb-43e55f889a06";

function Dashboard() {
  const navigate = useNavigate();

  const observations = [
    {
      id: 1,
      title: 'UAV i område (11 observationer)',
      location: 'Tuve',
      hasWarning: true
    },
    {
      id: 2,
      title: 'UAV i rörelse (23 observationer)',
      location: 'Längs Göta älv',
      hasWarning: true
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
            onClick={() => navigate('/dashboard/map')}
          >
            <div className="observation-icon">
              <img src={imgQuadrocopter} alt="Drone" />
              {obs.hasWarning && (
                <img src={imgWarning} alt="Warning" className="observation-warning-icon" />
              )}
            </div>
            <div className="observation-content">
              <div className="observation-title">{obs.title}</div>
              <div className="observation-location">{obs.location}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <button className="dashboard-action-button" onClick={() => navigate('/dashboard/map')}>
        → Visa karta
      </button>
    </div>
  );
}

export default Dashboard;
