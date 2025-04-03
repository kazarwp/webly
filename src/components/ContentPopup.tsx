import { useState } from "react";
import { ITextInput } from "../utils/interface";
import { useAppDispatch, useAppSelector } from "../utils/reduxHooks";
import { createElement } from "../features/blocks/blocks-slice";

export const ContentPopup = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.settings.textPopup);
  const [textValue, setTextValue] = useState<ITextInput>({
    type: "text",
    text: "",
    size: 0,
    weight: 0,
    src: "",
    height: 0
  });

  const handlerTextInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    const { name, value } = event.target;
    setTextValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handlerSubmitInput = () => {
    dispatch(createElement(textValue));
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="menu-popup menu-popup_text">
      <h2 className="menu-popup__title">Заполните поля текста</h2>
      <div className="menu-popup__inputs-container">
        <div className="menu-popup__case">
          <textarea
            name="text"
            value={textValue.text}
            className="menu-popup__input"
            placeholder="Введите текст"
            onChange={handlerTextInput}
          />
          <input
            name="size"
            value={textValue.size}
            type="text"
            className="menu-popup__input"
            placeholder="Размер текста"
            onChange={handlerTextInput}
          />
          <input
            name="weight"
            value={textValue.weight}
            type="text"
            className="menu-popup__input"
            placeholder="Тип шрифта(полужирный)"
            onChange={handlerTextInput}
          />
          <input
            name="src"
            value={textValue.src}
            type="text"
            className="menu-popup__input"
            placeholder="Ссылка на картинку"
            onChange={handlerTextInput}
          />
          <input
            name="height"
            value={textValue.height}
            type="text"
            className="menu-popup__input"
            placeholder="Высота картинки"
            onChange={handlerTextInput}
          />
        </div>
      </div>
      <div className="menu-popup__btn-container">
        <button
          type="submit"
          className="menu-popup__ready-btn"
          onClick={handlerSubmitInput}
        >
          Готово ✔
        </button>
      </div>
    </div>
  );
};
