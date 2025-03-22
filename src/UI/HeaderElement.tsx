import { useAppSelector } from "../utils/reduxHooks";

export const HeaderElement = () => {
  const { name, src, color } = useAppSelector((state) => state.blocks.elements[0]);
  console.log(name)
  return (
    <div className="header-element" style={{backgroundColor: color}}>
      <img src={src} alt="Логотип" className="header-element__img" />
      <h1 className="header-element__title">{name}</h1>
    </div>
  );
};

//*https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg*//