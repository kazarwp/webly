import { useAppSelector } from "../utils/reduxHooks";

import { footerSelect } from "../features/blocks/blocks-slice";
import { NavLink } from "react-router";
import { useLocation } from "react-router-dom";

export const FooterElement = () => {
  const location = useLocation();
  const footerElement = useAppSelector(footerSelect);

  if (!footerElement) return null;

  const { name, color, src, year } = footerElement;

  return (
    <div className="footer__container">
      <div className="footer" style={{ backgroundColor: color }}>
        <div className="footer__icon">
          <img src={src} alt="Логотип" className="header-element__img" />
          <h1 className="header-element__title">{name}</h1>
        </div>
        <h1 className="header-element__title">{year}</h1>
      </div>
      {location.pathname === "/edit" ? (
        <NavLink to="/site">
          <button className="card__btn card__btn_footer">
            Посмотерть сайт
          </button>
        </NavLink>
      ) : null}
    </div>
  );
};
