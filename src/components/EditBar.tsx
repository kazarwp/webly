import { memo } from "react";
import { useAppDispatch, useAppSelector } from "../utils/reduxHooks";
import { IPopupSettings } from "../utils/interface";
import { handleHeaderPopup } from "../features/settings/settings-slice";

export const EditBar = memo(() => {
  const dispatch = useAppDispatch();
  const settingsPopup: IPopupSettings = useAppSelector(
    (state) => state.settings
  );

  const handeleHeaderPopup = () => {
    const headerPopup: boolean = settingsPopup.headerPopup;
    dispatch(handleHeaderPopup(!headerPopup));
  };

  return (
    <nav className="edit-menu">
      <ul className="edit-menu__list">
        <li className="edit-menu__element" onClick={() => handeleHeaderPopup()}>
          Шапка
        </li>
        <li className="edit-menu__element">Обложка</li>
        <li className="edit-menu__element">Заголовок</li>
        <li className="edit-menu__element">Текст</li>
        <li className="edit-menu__element">Изображение</li>
        <li className="edit-menu__element">Кнопка</li>
        <li className="edit-menu__element">Подвал</li>
      </ul>
    </nav>
  );
});
