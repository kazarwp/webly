import { NavLink } from "react-router";
import headerLogo from "../assets/card-img.svg";

export const StartHeader = () => {
  return (
    <header className="header-start">
      <img src={headerLogo} alt="Webly Logo" className="start__header__logo" />{" "}
      {/* Логотип */}
      <div className="start__header-buttons">
        <NavLink to="/login">
          <button className="start__login-button">Войти</button>
        </NavLink>
        <NavLink to="/reg">
          <button className="start__register-button">Регистрация</button>
        </NavLink>
      </div>
    </header>
  );
};
