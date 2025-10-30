import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const imgQuadrocopter = "https://www.figma.com/api/mcp/asset/bf3a6fc7-1f35-465c-a784-8a531ad9d5e2";
const imgMenuIcon = "https://www.figma.com/api/mcp/asset/66002c8b-ae2c-49e1-a4bb-43e55f889a06";
const imgCheckmark = "https://www.figma.com/api/mcp/asset/e35e5be4-4d65-46ae-88d9-2e3df73bd1b4";
const imgCloseIcon = "https://www.figma.com/api/mcp/asset/adc67f85-404a-4fe7-9030-ea68ec828fe3";
const imgLocationIcon = "https://www.figma.com/api/mcp/asset/d10973cb-940b-49b2-a778-ddf73cfb6f13";

function PortalMain() {
  const navigate = useNavigate();
  const [activePopup, setActivePopup] = useState(null);

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

  const handleEditClick = (e, reportId) => {
    e.stopPropagation();
    setActivePopup(reportId);
  };

  const handleClosePopup = () => {
    setActivePopup(null);
  };

  const handleMenuItemClick = (action) => {
    console.log('Menu action:', action);
    setActivePopup(null);
    // Navigate based on action
    if (action === 'position') {
      navigate('/portal/edit/position');
    } else if (action === 'size') {
      navigate('/portal/edit/size');
    } else if (action === 'category') {
      navigate('/portal/edit/type');
    } else if (action === 'document') {
      navigate('/portal/edit/media');
    }
  };

  return (
    <div className="app-container bg-white">
      {/* App Bar */}
      <div className="report-app-bar">
        <button className="back-button-small" onClick={() => navigate('/')}>
          <img src={imgMenuIcon} alt="Menu" className="menu-icon" />
        </button>
        <h1 className="app-bar-title">Dina rapporter</h1>
      </div>

      {/* Reports List */}
      <div className="reports-list">
        {reports.map((report) => (
          <div key={report.id} className="report-item">
            <div className="report-icon">
              <img src={imgQuadrocopter} alt="Drone" />
            </div>
            <div className="report-content">
              <div className="report-time">{report.time}</div>
              <div className="report-location">{report.location}</div>
            </div>
            {report.hasCheckmark && (
              <button
                className="report-checkmark-button"
                onClick={(e) => handleEditClick(e, report.id)}
              >
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

      {/* Popup Menu */}
      {activePopup && (
        <>
          <div className="popup-overlay" onClick={handleClosePopup}></div>
          <div className="popup-menu">
            <div className="popup-header">
              <h2 className="popup-title">Vad vill du lägga till?</h2>
              <button className="popup-close-button" onClick={handleClosePopup}>
                <img src={imgCloseIcon} alt="Close" className="close-icon" />
              </button>
            </div>
            <div className="popup-menu-list">
              <button
                className="popup-menu-item"
                onClick={() => handleMenuItemClick('position')}
              >
                <img src={imgLocationIcon} alt="" className="menu-item-icon" />
                <div className="menu-item-content">
                  <div className="menu-item-title">Ny position</div>
                  <div className="menu-item-subtitle">Uppdatera position och riktning</div>
                </div>
              </button>
              <div className="menu-item-divider"></div>

              <button
                className="popup-menu-item"
                onClick={() => handleMenuItemClick('size')}
              >
                <div className="menu-item-icon-placeholder"></div>
                <div className="menu-item-content">
                  <div className="menu-item-title">Storlek</div>
                  <div className="menu-item-subtitle">Gör en uppskattning storlek</div>
                </div>
              </button>
              <div className="menu-item-divider"></div>

              <button
                className="popup-menu-item"
                onClick={() => handleMenuItemClick('category')}
              >
                <div className="menu-item-icon-placeholder"></div>
                <div className="menu-item-content">
                  <div className="menu-item-title">Kategorisering</div>
                  <div className="menu-item-subtitle">Gör en uppskattning av kategorin</div>
                </div>
              </button>
              <div className="menu-item-divider"></div>

              <button
                className="popup-menu-item"
                onClick={() => handleMenuItemClick('document')}
              >
                <div className="menu-item-icon-placeholder"></div>
                <div className="menu-item-content">
                  <div className="menu-item-title">Dokumentera</div>
                  <div className="menu-item-subtitle">Lägg till text, video eller ljud</div>
                </div>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PortalMain;
