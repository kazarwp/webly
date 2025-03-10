import headerLogo from "../assets/header_logo.svg";

export const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={headerLogo} alt="Лого" />
      <button className="header__profile-btn">Профиль</button>
    </div>
  );
};
