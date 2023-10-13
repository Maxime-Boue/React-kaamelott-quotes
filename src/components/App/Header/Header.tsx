import Navbar from './Navbar/Navbar';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Ogma</h1>
      <Navbar />
    </header>
  );
}
export default Header;
