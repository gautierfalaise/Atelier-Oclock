import { useState, useEffect } from 'react';
import './SearchBar.css';
import loupe from './loupe.svg';
import Message from './Message/Message';
import ReposResults from './ReposResults/ReposResults';

// Composant SearchBar
export default function SearchBar() {
  // Création des States, submitValue qui va contenir le ou les mots à rechercher,
  // et dataGH qui va contenir les repos trouvés.
  const [submitValue, setSubmitValue] = useState('react');
  const [dataGH, setDataGH] = useState();

  // Hooks qui va être exécuté à chaque submit pour faire appel à l'API
  // Il met a jour notre state avec les données reçus.
  useEffect(() => {
    fetch(`https://api.github.com/search/repositories?q=${submitValue}`)
      .then((response) => response.json())
      .then((data) => setDataGH(data));
  }, [submitValue]);

  /* Fonction qui est appelée lors de la soumission :
     évite le rechargement de la page
     met à jour le state avec la valeur de l'entrée */
  const searchValue = (e) => {
    e.preventDefault();
    const inputValue = e.target.querySelector('input').value;
    if (inputValue) {
      setSubmitValue(inputValue);
    }
  };

  return (
    <>
      {/* Formulaire de recherche */}
      <form onSubmit={(e) => searchValue(e)} className="search-container">
        <input className="input-search" type="text" id="inputText" name="inputText" placeholder="Rechercher" />
        <button className="search-button" type="submit">
          <img className="search-button-logo" src={loupe} alt="Search" width="24" height="24" />
        </button>
      </form>
      {/* appel du composant 'Message'. on lui passe en props les données reçus de l'API */}
      <Message nbrReposFounded={dataGH} />
      {/* appel du composant 'ReposResults'. Idem ^ */}
      <ReposResults data={dataGH} />
    </>
  );
}
