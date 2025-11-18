import useFetch from './useFetch';

function ListeArticles() {
  const { data, chargement, erreur } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (chargement) return <p className="liste-articles-loading">Chargement en cours...</p>;
  if (erreur) return <p className="liste-articles-error">Erreur : {erreur.message}</p>;

  return (
    <div className="liste-articles-container">
      <ul className="liste-articles-ul">
        {data.map((article) => (
          <li key={article.id} className="liste-articles-item">{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeArticles;

