import React, {Component} from 'react';
import './styles/Header.css';
import dp from '../assets/dp.png';
import Login from './Login';

export default class Nav extends Component {
        constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="nav">
                <div className="logo">
                    <img src={dp} alt=""/>
                </div>
                <div className="search">
                    <input type="text" name="" id="navsearch" placeholder="Busca tus productos..."/>
                </div>
                <div className="navrightside">
                    <div>
                        <button>Registrarme</button>
                    </div>
                    <div className="session">
                        <Login modal={false}></Login>
                        <a href="#">¿Olvidaste tu contraseña?</a>
                    </div>
                </div>                
            </div>        
          );
    }
}
