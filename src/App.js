import './App.css';
import Compteur from './Compteur';
import FocusInput from './FocusInput';
import CompteurRendu from './CompteurRendu';
import ListeArticles from './ListeArticles';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <h2>Compteur avec useReducer</h2>
      <div className="component-card">
        <Compteur />
      </div>

      <h2>Mettre le focus avec useRef</h2>
      <div className="component-card">
        <FocusInput />
      </div>

      <h2>Compteur de rendus</h2>
      <div className="component-card">
        <CompteurRendu />
      </div>

      <h2>Liste d'articles avec useFetch</h2>
      <div className="component-card">
        <ListeArticles />
      </div>

      <h2>Timer avec nettoyage d'effet</h2>
      <div className="component-card">
        <Timer />
      </div>
    </div>
  );
}

export default App;
