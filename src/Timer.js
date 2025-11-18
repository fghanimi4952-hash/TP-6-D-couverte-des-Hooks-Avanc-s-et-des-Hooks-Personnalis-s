import { useState, useEffect } from 'react';

function Timer() {
  const [secondes, setSecondes] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSecondes((s) => s + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="timer-container">
      <div className="timer-text">Temps écoulé : {secondes} secondes</div>
    </div>
  );
}

export default Timer;

