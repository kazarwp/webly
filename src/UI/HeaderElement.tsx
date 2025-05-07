import { useAppSelector } from "../utils/reduxHooks";

import { IHeaderInput } from "../utils/interface";
import { elementSelect } from "../features/blocks/blocks-slice";

export const HeaderElement = () => {
  const headerElement = useAppSelector((state) =>
    elementSelect<IHeaderInput>(state, "header")
  );

  if (!headerElement) return null;

  const { name, color, src } = headerElement;

  return (
    <div className="header-element" style={{ backgroundColor: color }}>
      <img src={src} alt="Логотип" className="header-element__img" />
      <h1 className="header-element__title">{name}</h1>
    </div>
  );
};

//*https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg*//
