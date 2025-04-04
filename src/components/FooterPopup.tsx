import { useState } from "react";
import { IFooterInput } from "../utils/interface";
import { useAppDispatch, useAppSelector } from "../utils/reduxHooks";
import { createElement } from "../features/blocks/blocks-slice";

export const FooterPopup = () => {
  const dispatch = useAppDispatch()
  const isOpen: boolean = useAppSelector((state) => state.settings.footerPopup);

  const [disableSubmit, setDisableSubmit] = useState(false);
  const [footerField, setFooterField] = useState<IFooterInput>({
    type: "footer",
    name: "",
    year: "",
    src: "",
    color: "",
  })

  const handlerFooterInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const {name, value} = event.target
    setFooterField((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  const handlerSubmitCover = () => {
      dispatch(createElement(footerField));
      setDisableSubmit(true);
    };

  if (!isOpen) return null;

  return (
    <div>
      <div className="menu-popup menu-popup_footer">
        <h2 className="menu-popup__title">Заполните поля подвала</h2>
        <div className="menu-popup__inputs-container">
          <div className="menu-popup__case">
            <input
              name="name"
              value={footerField.name}
              type="text"
              onChange={handlerFooterInput}
              className="menu-popup__input"
              placeholder="Названия сайта"
            />
            <input
              name="year"
              value={footerField.year}
              type="text"
              onChange={handlerFooterInput}
              className="menu-popup__input"
              placeholder="Введите текущий год"
            />
            <input
              name="src"
              value={footerField.src}
              type="text"
              onChange={handlerFooterInput}
              className="menu-popup__input"
              placeholder="Ссылка на логотип"
            />
            <input
              name="color"
              value={footerField.color}
              type="text"
              onChange={handlerFooterInput}
              className="menu-popup__input"
              placeholder="Цвет шапки"
            />
          </div>
        </div>
        <div className="menu-popup__btn-container">
          <button
            type="submit"
            onClick={handlerSubmitCover}
            className="menu-popup__ready-btn"
            disabled={disableSubmit}
          >
            Готово ✔
          </button>
        </div>
      </div>
    </div>
  );
};
