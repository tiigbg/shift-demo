import { useNavigate } from 'react-router-dom';
import '../../App.css';

function Social() {
  const navigate = useNavigate();

  const messages = [
    {
      id: 1,
      user: 'Ärlig Räka',
      message: 'Polisbåten är här ikväll igen...',
      time: '14:32',
      avatar: '🦐'
    },
    {
      id: 2,
      user: 'Nostalgisk Kråka',
      message: 'Bra att alla klagomål fått Polisen att dyka upp lite oftare',
      time: '14:32',
      avatar: '🐦'
    },
    {
      id: 3,
      user: 'Vaken Katt',
      message: 'Nu hör jag en helikopter, vågar någon gå ut och kolla?',
      time: '14:32',
      avatar: '🐱'
    }
  ];

  return (
    <div className="app-container bg-white">
      {/* App Bar */}
      <div className="report-app-bar">
        <button className="back-button-small" onClick={() => navigate('/')}>
          ←
        </button>
        <h1 className="app-bar-title">Kvarters-gruppen</h1>
        <div className="avatar-small"></div>
      </div>

      {/* Group Header */}
      <div className="group-header">
        <div className="group-icon">👥</div>
        <div className="group-info">
          <h2 className="group-name">Tuve Kvarters-grupp</h2>
          <p className="group-members">247 medlemmar</p>
        </div>
      </div>

      {/* Messages */}
      <div className="messages-list">
        {messages.map((msg) => (
          <div key={msg.id} className="message-item">
            <div className="message-avatar">{msg.avatar}</div>
            <div className="message-content">
              <div className="message-header">
                <span className="message-user">{msg.user}</span>
                <span className="message-time">{msg.time}</span>
              </div>
              <p className="message-text">{msg.message}</p>
              <div className="message-actions">
                <button className="message-action-btn">👍</button>
                <button className="message-action-btn">💬</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="message-input-container">
        <input
          type="text"
          placeholder="Skriv ett meddelande..."
          className="message-input"
        />
        <button className="send-button">Skicka</button>
      </div>

      <button className="back-button" onClick={() => navigate('/')}>
        Tillbaka
      </button>
    </div>
  );
}

export default Social;
