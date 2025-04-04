import { useState } from "react";
import { useNavigate } from "react-router";

import axios from "axios";

import { IRegistration } from "../utils/interface";

import logo from "../assets/header_logo.svg";

export const RegMain = () => {
  const [formData, setFormData] = useState<IRegistration>({
    name: "",
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  const handlerRegInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://weblybackend.onrender.com/api/auth/register",
        {
          name: formData.name, // возможно, сервер ожидает 'username' вместо 'name'
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-container">
      <div className="reg-box">
        <img src={logo} alt="Webly Logo" className="logo" />
        <h2 className="login-h2">Создайте учетную запись</h2>
        <input
          type="text"
          placeholder="Имя"
          name="name"
          value={formData.name}
          onChange={handlerRegInput}
          className="input-field"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handlerRegInput}
          placeholder="Электронная почта"
          className="input-field"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handlerRegInput}
          placeholder="Пароль"
          className="input-field"
        />
        <button className="login-button" onClick={handleSubmit}>
          Создать
        </button>
        <p className="register-link">
          Уже есть аккаунт? <a href="/register">Войти тут</a>
        </p>
      </div>
    </div>
  );
};
