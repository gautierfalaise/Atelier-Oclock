import SearchBar from './SearchBar/SearchBar';
import logoGithub from './logo-github.png';
import './GitHub.css';

// Composant 'GitHub'.
export default function GitHub() {
  return (
    <div className="gitHub-container">
      {/* Logo GitHub */}
      <img className="logo-github" src={logoGithub} alt="logo github" />
      {/* appel du composant 'SearchBar'. */}
      <SearchBar />
    </div>
  );
}
