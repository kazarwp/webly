import { useState } from "react";
import { useNavigate } from "react-router";

import { ILogin } from "../utils/interface";

import logo from "../assets/header_logo.svg";
import axios from "axios";
import { useAppDispatch } from "../utils/reduxHooks";
import { addUserInfo } from "../features/user/user-slice";

export const LoginMain = () => {
  const dispatch = useAppDispatch()
  const [accountLogin, setAccountLogin] = useState<ILogin>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handlerRegInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setAccountLogin((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://weblybackend.onrender.com/api/auth/login",
        {
          email: accountLogin.email,
          password: accountLogin.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/")
      dispatch(addUserInfo(accountLogin))
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Webly Logo" className="logo" />
        <h2 className="login-h2">Войдите в учетную запись</h2>
        <input
          type="email"
          value={accountLogin.email}
          placeholder="Электронная почта"
          name="email"
          onChange={handlerRegInput}
          className="input-field"
        />
        <input
          type="password"
          value={accountLogin.password}
          placeholder="Пароль"
          name="password"
          onChange={handlerRegInput}
          className="input-field"
        />
        <button className="login-button" onClick={handleLoginSubmit}>
          Войти
        </button>
        <p className="register-link">
          Нет аккаунта? <a href="/reg">Зарегистрироваться тут</a>
        </p>
      </div>
    </div>
  );
};
