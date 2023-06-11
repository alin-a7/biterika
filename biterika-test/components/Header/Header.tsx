import Buttons from "./components/Buttons/Buttons";
import Logo from "./components/Logo";

const Header = () => {
  return (
    <header className="header border desktop">
      <div className="container">
        <Logo />
        <button
          type="button"
          data-trigger="nav-popup"
          data-overlay
          className="site-icon desktop-none"
        >
          <img
            src="https://static.biterika.team/brobooster/assets/images/icons/site.svg"
            alt="img"
          />
        </button>
        <Buttons />
      </div>
    </header>
  );
};
export default Header;
