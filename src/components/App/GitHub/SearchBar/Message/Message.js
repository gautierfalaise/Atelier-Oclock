import './Message.css';

// Le composant 'Message' sert à afficher le nombre de résultats trouvés.
export default function Message({ nbrReposFounded }) {
  return (
    <div className="message-container">
      <p>La recherche a donné {nbrReposFounded && nbrReposFounded.total_count} résultats</p>
    </div>
  );
}
