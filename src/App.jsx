import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './pages/Start';
import PlaceholderPage from './pages/PlaceholderPage';

// Report Flow
import ReportStart from './pages/report/ReportStart';
import Sending from './pages/report/Sending';
import Verify from './pages/report/Verify';
import BankId from './pages/report/BankId';
import Thanks from './pages/report/Thanks';

// Portal
import PortalMain from './pages/portal/PortalMain';

// Dashboard
import Dashboard from './pages/dashboard/Dashboard';
import DashboardMap from './pages/dashboard/DashboardMap';

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

        {/* Report Flow */}
        <Route path="/report" element={<ReportStart />} />
        <Route path="/report/sending" element={<Sending />} />
        <Route path="/report/verify" element={<Verify />} />
        <Route path="/report/bankid" element={<BankId />} />
        <Route path="/report/thanks" element={<Thanks />} />

        {/* Portal */}
        <Route path="/portal" element={<PortalMain />} />
        <Route
          path="/portal/detail"
          element={
            <PlaceholderPage
              title="Rapportdetaljer"
              description="Här kan du se detaljer om din rapport och dess status."
            />
          }
        />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/map" element={<DashboardMap />} />

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
