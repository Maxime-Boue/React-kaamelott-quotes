import './Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <a className="navbar__link" href="https://www.google.com">
        Home
      </a>
      <a className="navbar__link" href="https://www.google.com">
        Personnages
      </a>
      <a className="navbar__link" href="https://www.google.com">
        Livres
      </a>
    </nav>
  );
}

export default Navbar;
