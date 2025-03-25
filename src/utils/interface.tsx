export interface IHeaderInput {
  type: string;
  name: string;
  src: string;
  color: string;
  opacity: boolean;
}

export interface IPopupSettings {
  headerPopup: boolean,
  coverPopup: boolean,
  titlePopup: boolean,
  textPopup: boolean,
  imgPopup: boolean,
  buttonPopup: boolean,
  footerPopup: boolean,
}