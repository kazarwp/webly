import { NavLink } from "react-router";

export const MainContent = () => {
  return (
    <main className="start__main">
      <h1 className = "start__h1">Ваш идеальный сайт всего в пару кликов.</h1>
      <p className = "start__p">Конструируйте, вдохновляйтесь, реализуйте с WEBLY!</p>
      <div className="start__actions">
        <a href="#" className="start__documentation-link">Документация</a>
        <NavLink to="/home" className="start__create-site-button">Создать сайт</NavLink>
      </div>
    </main>
  );
};

