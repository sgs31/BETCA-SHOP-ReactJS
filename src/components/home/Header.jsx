import React from "react";
import "./styless/Header.css";
import dp from "../../assets/dp.png";
import Login from "./Login";

const Header = () => {
  return (
    <div className="nav">
      <div className="logo">
        <a href="/home">
          <img src={dp} alt="" />
        </a>
      </div>
      <div className="search">
        <input
          type="search"
          name=""
          id="navsearch"
          placeholder="Busca tus productos..."
        />
      </div>
      <div className="navrightside">
        <div>
          <button>Registrarme</button>
        </div>
        <div className="session">
          <Login modal={true}></Login>
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
