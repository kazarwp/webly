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

export interface ITitleInput {
  type: string,
  titleText: string,
}

export interface IUserInfo {
  type: string,
  email: string,
  auth: boolean,
  password: string,
}

export interface ITextInput {
  type: string,
  text: string,
  size: number,
  weight: number,
  src: string,
  height: number,
}

export interface IFooterInput {
  type: string,
  name: string,
  year: string,
  src: string,
  color: string, 
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

export interface IRegistration {
  name: string,
  email: string,
  password: string,
}

export interface ILogin {
  email: string,
  password: string,
}

export type BlockElements = IHeaderInput | ICoverInput | ITitleInput | ITextInput | IFooterInput