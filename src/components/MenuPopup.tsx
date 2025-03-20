import { useState } from "react";

interface IMenuPopup {
  isOpen: boolean;
}

export const MenuPopup: React.FC<IMenuPopup> = ({ isOpen }) => {
  const [fieldsMenu, setFieldsMenu] = useState<string[]>([""]);

  const addInput = () => {
    setFieldsMenu([...fieldsMenu, ""]);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="menu-popup">
      <h2 className="menu-popup__title">Заполните поля меню</h2>
      <div className="menu-popup__inputs-container">
        {fieldsMenu.map((input, index) => {
          return (
            <input
              key={index}
              value={input}
              type="text"
              className="menu-popup__input"
              placeholder="Названия кнопки"
            />
          );
        })}
      </div>
      <div className="menu-popup__btn-container">
        <button onClick={addInput} className="menu-popup__add-btn">
          Добавить поле
        </button>
        <button className="menu-popup__ready-btn">Готово</button>
      </div>
    </div>
  );
};
