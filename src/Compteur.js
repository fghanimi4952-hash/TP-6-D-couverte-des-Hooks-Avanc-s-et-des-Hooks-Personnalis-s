import { useReducer } from 'react';

// État initial
const initialState = { count: 0 };

// Fonction reducer qui décide comment mettre à jour l'état
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Action non reconnue');
  }
}

function Compteur() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="compteur-container">
      <div className="compteur-value">{state.count}</div>
      <div className="compteur-buttons">
        <button className="compteur-button" onClick={() => dispatch({ type: 'increment' })}>+1</button>
        <button className="compteur-button" onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      </div>
    </div>
  );
}

export default Compteur;

