import { useEffect } from 'react';
import './GeneratorButton.scss';
import { KaamelottType } from '../../../type/type';

type GeneratorButtonProps = {
  shuffledQuotes: KaamelottType[];
  setQuote: React.Dispatch<React.SetStateAction<string>>;
};
function GeneratorButton({ setQuote, shuffledQuotes }: GeneratorButtonProps) {
  const handleClickGenerator = () => {
    if (shuffledQuotes.length > 0) {
      const randomQuote = shuffledQuotes[0].quote;

      setQuote(randomQuote);
    }
  };

  return (
    <button type="button" className="button" onClick={handleClickGenerator}>
      INTERPREEEETE !!!
    </button>
  );
}

export default GeneratorButton;
