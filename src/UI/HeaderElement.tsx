import { headerSelect } from "../features/blocks/blocks-slice";
import { useAppSelector } from "../utils/reduxHooks";

export const HeaderElement = () => {
  const headerElement = useAppSelector(headerSelect);

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
