import { useNavigate } from 'react-router-dom';
import '../../App.css';

const imgQuadrocopter = "https://www.figma.com/api/mcp/asset/bf3a6fc7-1f35-465c-a784-8a531ad9d5e2";
const imgMenuIcon = "https://www.figma.com/api/mcp/asset/66002c8b-ae2c-49e1-a4bb-43e55f889a06";
const imgCheckmark = "https://www.figma.com/api/mcp/asset/e35e5be4-4d65-46ae-88d9-2e3df73bd1b4";

function PortalMain() {
  const navigate = useNavigate();

  const reports = [
    {
      id: 1,
      time: 'Idag 10:45',
      location: 'Göteborg (overifierad)',
      type: 'air',
      hasCheckmark: true
    },
    {
      id: 2,
      time: '20 Sep 2025, 13:49',
      location: 'Landvetter',
      type: 'air',
      hasCheckmark: true
    },
    {
      id: 3,
      time: '19 Aug 2023 , 17:23',
      location: 'Göteborg',
      type: 'air',
      hasCheckmark: true
    }
  ];

  return (
    <div className="app-container bg-white">
      {/* App Bar */}
      <div className="report-app-bar">
        <button className="menu-button" onClick={() => navigate('/')}>
          <img src={imgMenuIcon} alt="Menu" className="menu-icon" />
        </button>
        <h1 className="app-bar-title">Dina rapporter</h1>
      </div>

      {/* Reports List */}
      <div className="reports-list">
        {reports.map((report) => (
          <div key={report.id} className="report-item" onClick={() => navigate('/portal/detail')}>
            <div className="report-icon">
              <img src={imgQuadrocopter} alt="Drone" />
            </div>
            <div className="report-content">
              <div className="report-time">{report.time}</div>
              <div className="report-location">{report.location}</div>
            </div>
            {report.hasCheckmark && (
              <button className="report-checkmark-button">
                <img src={imgCheckmark} alt="Edit" className="report-checkmark-icon" />
              </button>
            )}
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
