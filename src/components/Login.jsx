import React, { Component } from 'react'
import close from '../assets/close.svg'
import './styles/Login.css';

export default class Login extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card-ubication">
                <div className="card-login">
                    <a href=""><img src={close} alt=""/></a>
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
            </div>
        );
    }
}