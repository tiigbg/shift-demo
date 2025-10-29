import { useNavigate } from 'react-router-dom';
import '../App.css';

function PlaceholderPage({ title, description }) {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <div className="placeholder-page">
        <h1>{title}</h1>
        <p>{description}</p>
        <button className="back-button" onClick={() => navigate('/')}>
          Tillbaka till start
        </button>
      </div>
    </div>
  );
}

export default PlaceholderPage;
