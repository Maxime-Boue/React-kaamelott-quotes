import './App.scss';
import { useState } from 'react';
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
        <Profiles personnages={quotesData} setQuote={setQuote} />
        <GeneratorButton />
        <Quotes citation={`"${quote}"`} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
