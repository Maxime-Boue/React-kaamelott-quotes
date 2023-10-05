import './App.scss';
import Header from './Header/Header';
import Profiles from './Profiles/Profiles';
import GeneratorButton from './GeneratorButton/GeneratorButton';
import Quotes from './Quotes/Quotes';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Profiles />
      <GeneratorButton />
      <Quotes />
      <Footer />
    </div>
  );
}

export default App;
