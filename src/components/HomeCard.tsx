import { NavLink } from "react-router";

import cardImg from "../assets/card-img.svg";

export const HomeCard = () => {
  return (
    <div className="card">
      <div className="card__img-container">
        <img className="card__img" src={cardImg} alt="Лого карточки" />
      </div>
      <div className="card__container">
        <p className="card__title">Пустая страница</p>
        <p className="card__description">Начать с чистого листа.</p>
        <NavLink to="/edit">
          <button className="card__btn">Выбрать дизайн</button>
        </NavLink>
      </div>
    </div>
  );
};
