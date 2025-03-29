export interface IHeaderInput {
  type: string;
  name: string;
  src: string;
  color: string;
}

export interface ICoverInput {
  type: string,
  height: string,
  src: string
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

export type BlockElements = IHeaderInput | ICoverInput