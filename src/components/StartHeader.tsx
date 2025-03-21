import headerLogo from "../assets/card-img.svg";

export const StartHeader = () => {
  return (
    <header className = "header-start">
      <div className="start__header-buttons">
      <img className="start__header__logo" src={headerLogo} alt="Лого" />
        <button className="start__login-button">Войти</button>
        <button className="start__register-button">Регистрация</button>
      </div>
    </header>
  );
};