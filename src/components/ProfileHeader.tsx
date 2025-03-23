import headerLogo from "../assets/header_logo.svg";

export const ProfileHeader = () => {
  return (
    <div className="header">
      <img className="header__logo" src={headerLogo} alt="Лого" />
      <button className="header__profile-btn">Выйти</button>
    </div>
  );
};