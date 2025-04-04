import { useAppSelector } from "../utils/reduxHooks";

import { footerSelect } from "../features/blocks/blocks-slice";

export const FooterElement = () => {
  const footerElement = useAppSelector(footerSelect);

  if (!footerElement) return null;

  const { name, color, src, year } = footerElement;

  return (
    <div className="footer" style={{ backgroundColor: color }}>
      <div className="footer__icon">
        <img src={src} alt="Логотип" className="header-element__img" />
        <h1 className="header-element__title">{name}</h1>
      </div>
      <h1 className="header-element__title">{year}</h1>
    </div>
  );
};
