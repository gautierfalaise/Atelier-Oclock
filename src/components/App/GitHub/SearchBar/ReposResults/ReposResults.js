import './ReposResults.css';

// Le composant 'ReposResults' sert à afficher les 30 premiers repos trouvé.
export default function ReposResults({ data }) {
  return (
    <div className="repos-container">
      {/* Lorsque les données arrivent, je les affiche. */}
      {data && data.items.map((repo) => (
        <div key={repo.id} className="repo-founded">
          <img className="repo-logo" width="1000px" src={repo.owner.avatar_url} alt="Logo du repos trouvé" />
          <h1 className="repos-title">{repo.full_name}</h1>
          <h2 className="repos-subtitle">{repo.created_at}</h2>
          <p className="repos.description">{repo.description}</p>
          <a className="repos-link" href={repo.html_url}>{repo.html_url}</a>
        </div>
      ))}
    </div>
  );
}
