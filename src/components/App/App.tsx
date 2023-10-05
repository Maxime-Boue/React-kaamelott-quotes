import './App.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header/Header';
import Profiles from './Profiles/Profiles';
import GeneratorButton from './GeneratorButton/GeneratorButton';
import Quotes from './Quotes/Quotes';
import Footer from './Footer/Footer';
// import { KaamelottType } from '../../type/type';

function App() {
  const [personnage, setPersonnage] = useState<string[]>([
    'Arthur',
    'Lancelot',
  ]);

  // useEffect(() => {
  //   axios
  //     .get(`https://kaamelott.chaudie.re/api/random/personnage/Arthur`)
  //     .then((response) => {
  //       setPersonnage(response.data);
  //     });
  // });

  const kaamQuotes = () => {
    fetch(`https://kaamelott.chaudie.re/api/random/personnage/Arthur`)
      .then((response) => response.json())
      .then((data) => {
        setPersonnage(data.value);
      });
  };

  useEffect(() => {
    kaamQuotes();
  });

  const [quote, setQuote] = useState('One super hilarious quote');
  return (
    <div className="App">
      <Header />
      <main>
        <Profiles personnages={personnage} />
        <GeneratorButton />
        <Quotes profile={quote} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
