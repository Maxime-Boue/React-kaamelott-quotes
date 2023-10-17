import './GeneratorButton.scss';
import { KaamelottType } from '../../../type/type';

type GeneratorButtonProps = {
  shuffledQuotes: KaamelottType[];
  allQuotes: string[];
  setQuote: React.Dispatch<React.SetStateAction<string>>;
};
function GeneratorButton({
  allQuotes,
  setQuote,
  shuffledQuotes,
}: GeneratorButtonProps) {
  const handleClickGenerator = () => {
    if (shuffledQuotes.length > 0) {
      // On choisit une citation parmi les citations filtrées
      const randomIndex = Math.floor(Math.random() * shuffledQuotes.length);
      const randomQuote = shuffledQuotes[randomIndex].quote;
      setQuote(randomQuote);
    } else if (allQuotes.length > 0) {
      // On choisit une citation parmi toutes les citations
      const randomIndex = Math.floor(Math.random() * allQuotes.length);
      const randomQuote = allQuotes[randomIndex];
      setQuote(randomQuote);
    } else {
      setQuote('Aucune citation disponible.');
    }
  };

  return (
    <button type="button" className="button" onClick={handleClickGenerator}>
      <p>Interprète !</p>
      <img
        className="epee-logo"
        src="../../../assets/img/epee.png"
        alt="épée de kaamelott"
      />
    </button>
  );
}

export default GeneratorButton;
