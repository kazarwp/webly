import headerLogo from "../assets/card-img.svg";

export const StartHeader = () => {
  return (
    <header className="header-start">
      <img src={headerLogo} alt="Webly Logo" className="start__header__logo" /> {/* Логотип */}
      <div className="start__header-buttons">
        <button className="start__login-button">Войти</button>
        <button className="start__register-button">Регистрация</button>
      </div>
    </header>
  );
};