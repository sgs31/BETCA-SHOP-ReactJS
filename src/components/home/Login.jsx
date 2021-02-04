import React, { useState } from "react";
import { Modal } from "reactstrap";
import close from "../../assets/close.svg";
import "./styless/Login.css";

const Login = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <a onClick={toggle} id="a-login">
        Iniciar sesión
      </a>
      <Modal isOpen={modal} toggle={toggle} id="modal-width">
        <div className="card-login">
          <a href="" onClick={toggle}>
            <img src={close} alt="" />
          </a>
          <div>
            <input type="text" id="email-input" placeholder="Email" />
          </div>
          <div>
            <input type="password" id="pass-input" placeholder="Password" />
          </div>
          <div className="access">
            <a href="#">¿Olvidaste tu contraseña?</a>
            <button>Entrar</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
