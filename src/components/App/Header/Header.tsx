import Navbar from './Navbar/Navbar';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <img
        className="logo"
        src="../../../../assets/img/ogma.png"
        alt="médaillon d'ogma"
      />
      <h1 className="header__title">Ogma</h1>
      {/* <Navbar /> */}
    </header>
  );
}
export default Header;
