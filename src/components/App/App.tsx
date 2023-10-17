import './App.scss';
import { useEffect, useState } from 'react';
import Header from './Header/Header';
import Profiles from './Profiles/Profiles';
import GeneratorButton from './GeneratorButton/GeneratorButton';
import Quotes from './Quotes/Quotes';
import Footer from './Footer/Footer';
import quotesData from '../../data/quotes.json';

function App() {
  const [quote, setQuote] = useState('One super hilarious quote');
  const [character, setCharacter] = useState('');

  // console.log(character);
  // useEffect(() => {
  //   // const quoteByCharacter = [];
  //   quotesData.map((characterQuote) => {
  //     if (character === characterQuote.character) {
  //       // quoteByCharacter.push(characterQuote);
  //       return characterQuote;
  //     }
  //     console.log(characterQuote);
  //     return '';
  //   });
  // }, [character]);

  const [characterQuotes, setCharacterQuotes] = useState([]);

  useEffect(() => {
    // Filtrer les citations en fonction du personnage sélectionné
    const filteredQuotes = quotesData.filter(
      (characterQuote) => character === characterQuote.character
    );
    setCharacterQuotes(filteredQuotes);
  }, [character]);

  // console.log(characterQuotes);

  function shuffleArray(array: KaamelottType[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledQuotes = shuffleArray(characterQuotes);

  return (
    <div className="App">
      <Header />
      <main>
        <Profiles
          personnages={quotesData}
          setQuote={setQuote}
          setCharacter={setCharacter}
        />
        <GeneratorButton setQuote={setQuote} shuffledQuotes={shuffledQuotes} />
        <Quotes citation={`"${quote}"`} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
