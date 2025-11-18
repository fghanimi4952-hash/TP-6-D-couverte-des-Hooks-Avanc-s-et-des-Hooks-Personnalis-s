import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    // current pointe vers l'élément <input>
    inputRef.current.focus();
  };

  return (
    <div className="focus-input-container">
      <input className="focus-input" ref={inputRef} placeholder="Tapez ici..." />
      <button className="focus-button" onClick={handleClick}>Mettre le focus</button>
    </div>
  );
}

export default FocusInput;

