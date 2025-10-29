import { useNavigate } from 'react-router-dom';
import '../../App.css';

const imgQuadrocopter = "https://www.figma.com/api/mcp/asset/a0315b0d-3743-40a2-98ba-080d1805e326";
const imgWarning = "https://www.figma.com/api/mcp/asset/8a5e015f-a689-4728-b973-4a070d857a17";

function PortalMain() {
  const navigate = useNavigate();

  const reports = [
    {
      id: 1,
      time: 'Idag 10:45',
      location: 'Göteborg',
      type: 'air',
      hasWarning: true
    }
  ];

  return (
    <div className="app-container bg-white">
      {/* App Bar */}
      <div className="report-app-bar">
        <button className="back-button-small" onClick={() => navigate('/')}>
          ←
        </button>
        <h1 className="app-bar-title">Dina rapporter</h1>
        <button className="menu-button">⋮</button>
      </div>

      {/* Reports List */}
      <div className="reports-list">
        {reports.map((report) => (
          <div key={report.id} className="report-item" onClick={() => navigate('/portal/detail')}>
            <div className="report-icon">
              <img src={imgQuadrocopter} alt="Drone" />
              {report.hasWarning && (
                <img src={imgWarning} alt="Warning" className="report-warning-icon" />
              )}
            </div>
            <div className="report-content">
              <div className="report-time">{report.time}</div>
              <div className="report-location">{report.location}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Create new report button */}
      <button className="portal-new-report-button" onClick={() => navigate('/report')}>
        + Skapa ny rapport
      </button>
    </div>
  );
}

export default PortalMain;
