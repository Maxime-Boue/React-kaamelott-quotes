import './App.scss';
import { useEffect, useState } from 'react';
// import axios from 'axios';
import Header from './Header/Header';
import Profiles from './Profiles/Profiles';
import GeneratorButton from './GeneratorButton/GeneratorButton';
import Quotes from './Quotes/Quotes';
import Footer from './Footer/Footer';
import quotesData from '../../data/quotes.json';

function App() {
  const [quote, setQuote] = useState('One super hilarious quote');
  return (
    <div className="App">
      <Header />
      <main>
        <Profiles personnages={quotesData} />
        <GeneratorButton />
        <Quotes profile={quote} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
