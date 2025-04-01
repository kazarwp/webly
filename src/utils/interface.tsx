export interface IHeaderInput {
  type: string;
  name: string;
  src: string;
  color: string;
}

export interface ICoverInput {
  type: string,
  width: number | string | undefined,
  height: number | string | undefined,
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