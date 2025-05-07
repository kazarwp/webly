import { useAppSelector } from "../utils/reduxHooks";

import { elementSelect } from "../features/blocks/blocks-slice";
import { NavLink } from "react-router";
import { useLocation } from "react-router-dom";
import { IFooterInput } from "../utils/interface";

export const FooterElement = () => {
  const location = useLocation();
  const footerElement = useAppSelector((state) =>
    elementSelect<IFooterInput>(state, "footer")
  );

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
