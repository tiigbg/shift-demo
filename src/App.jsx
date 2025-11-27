import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './pages/Start';
import PlaceholderPage from './pages/PlaceholderPage';

// Intro Screens
import ReportIntro from './pages/intro/ReportIntro';
import PortalIntro from './pages/intro/PortalIntro';
import DashboardIntro from './pages/intro/DashboardIntro';
import NotificationIntro from './pages/intro/NotificationIntro';
import SocialIntro from './pages/intro/SocialIntro';

// Report Flow
import ReportStart from './pages/report/ReportStart';
import Sending from './pages/report/Sending';
import Verify from './pages/report/Verify';
import BankId from './pages/report/BankId';
import Thanks from './pages/report/Thanks';

// Portal
import PortalMain from './pages/portal/PortalMain';
import EditPosition from './pages/portal/edit/EditPosition';
import EditSize from './pages/portal/edit/EditSize';
import EditType from './pages/portal/edit/EditType';
import EditMedia from './pages/portal/edit/EditMedia';
import Response1 from './pages/portal/Response1';
import Response2 from './pages/portal/Response2';

// Dashboard
import Dashboard from './pages/dashboard/Dashboard';
import DashboardMap from './pages/dashboard/DashboardMap';
import DashboardMapTuve from './pages/dashboard/DashboardMapTuve';
import DashboardMapGota from './pages/dashboard/DashboardMapGota';

// Notification
import Notification from './pages/notification/Notification';

// Social
import Social from './pages/social/Social';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Start />} />

        {/* Intro Screens */}
        <Route path="/report-intro" element={<ReportIntro />} />
        <Route path="/portal-intro" element={<PortalIntro />} />
        <Route path="/dashboard-intro" element={<DashboardIntro />} />
        <Route path="/notification-intro" element={<NotificationIntro />} />
        <Route path="/social-intro" element={<SocialIntro />} />

        {/* Report Flow */}
        <Route path="/report" element={<ReportStart />} />
        <Route path="/report/sending" element={<Sending />} />
        <Route path="/report/verify" element={<Verify />} />
        <Route path="/report/bankid" element={<BankId />} />
        <Route path="/report/thanks" element={<Thanks />} />

        {/* Portal */}
        <Route path="/portal" element={<PortalMain />} />
        <Route path="/portal/edit/position" element={<EditPosition />} />
        <Route path="/portal/edit/size" element={<EditSize />} />
        <Route path="/portal/edit/type" element={<EditType />} />
        <Route path="/portal/edit/media" element={<EditMedia />} />
        <Route path="/portal/response1" element={<Response1 />} />
        <Route path="/portal/response2" element={<Response2 />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/map" element={<DashboardMap />} />
        <Route path="/dashboard/map/tuve" element={<DashboardMapTuve />} />
        <Route path="/dashboard/map/gota" element={<DashboardMapGota />} />

        {/* Notifications */}
        <Route path="/notification" element={<Notification />} />
        <Route
          path="/notification/confirmation"
          element={
            <PlaceholderPage
              title="Bekräftelse"
              description="Dina notifieringsinställningar har sparats."
            />
          }
        />

        {/* Social */}
        <Route path="/social" element={<Social />} />
      </Routes>
    </Router>
  );
}

export default App;
