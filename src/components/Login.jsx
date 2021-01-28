import React, { Component, useState } from 'react'
import {Modal} from 'reactstrap';
import close from '../assets/close.svg'
import './styles/Login.css';

const Login = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    return (

        <div>
            <a href="" onClick={toggle}>Iniciar sesión</a>
            <Modal isOpen={modal} toggle={toggle}>
                
                    <div className="card-login">
                        <a href="" onClick={toggle}><img src={close} alt="" /></a>
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

}

export default Login;