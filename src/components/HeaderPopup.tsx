import { useState } from "react";
import { useAppDispatch } from "../utils/reduxHooks";
import { createHeader } from "../features/blocks/blocks-slice";

import { IHeaderInput } from "../utils/interface";

interface IMenuPopup {
  isOpen: boolean;
}

export const HeaderPopup: React.FC<IMenuPopup> = ({ isOpen }) => {

  const dispatch = useAppDispatch()

  const [headerInput, setHeaderInput] = useState<IHeaderInput>({
    type: "header",
    name: "",
    src: "",
    color: "",
    opacity: false,
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setHeaderInput((prevState) => {
      return {
        ...prevState,
        [name]: value,
        opacity: true
      };
    });
  };

  const addHeaderComponent = () => {
    dispatch(createHeader(headerInput))
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className="menu-popup">
      <h2 className="menu-popup__title">Заполните поля шапки</h2>
      <div className="menu-popup__inputs-container">
        <div className="menu-popup__case">
          <input
            name="name"
            value={headerInput.name}
            type="text"
            onChange={handleInput}
            className="menu-popup__input"
            placeholder="Названия сайта"
          />
          <input
            name="src"
            value={headerInput.src}
            type="text"
            onChange={handleInput}
            className="menu-popup__input"
            placeholder="Ссылка на логотип"
          />
          <input
            name="color"
            value={headerInput.color}
            type="text"
            onChange={handleInput}
            className="menu-popup__input"
            placeholder="Цвет шапки"
          />
        </div>
      </div>
      <div className="menu-popup__btn-container">
        <button type="submit" onClick={() => addHeaderComponent()} className="menu-popup__ready-btn">
          Готово ✔
        </button>
      </div>
    </div>
  );
};
