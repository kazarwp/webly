import '../styles/start-page/start.css';
import headerLogo from "../assets/card-img.svg";

export const StartHeader = () => {
  return (
    <header>
      <div className="header-buttons">
      <img src={headerLogo} alt="Webly Logo" style={{ height: '50px' }} /> {/* Логотип */}
        <button className="login-button">Войти</button>
        <button className="register-button">Регистрация</button>
      </div>
    </header>
  );
};