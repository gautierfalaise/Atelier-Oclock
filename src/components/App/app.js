// == Import
import './app.css';
import GitHub from './GitHub/GitHub';

// == Composant de base
function App() {
  return (
    <div className="app">
      {/* appel du composant 'GitHub'. */}
      <GitHub />
    </div>
  );
}

// == Export
export default App;
