import { useRef, useEffect } from 'react';

function CompteurRendu() {
  const compteur = useRef(0);

  useEffect(() => {
    compteur.current += 1;
    console.log(`Le composant a été affiché ${compteur.current} fois.`);
  });

  return (
    <div className="compteur-rendu-container">
      <div className="compteur-rendu-text">
        Regarde la console pour voir le nombre de rendus.
      </div>
    </div>
  );
}

export default CompteurRendu;

