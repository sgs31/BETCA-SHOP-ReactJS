import React from 'react';
import mob from '../assets/mob.svg';
import './styles/Home.css';
import com from '../assets/com.svg';

export default function Home(){
    return(
        <div className="main">
            <div className="main-container">
                <img src={mob} alt=""/>
                <div className="h1-container">
                    <h1>COMPRAR NUNCA FUE TAN FACIL</h1>
                    <h2>COMPRAR NUNCA FUE TAN FACIL</h2>
                    <h3>COMPRAR NUNCA FUE TAN FACIL</h3>
                </div>
            </div>
            <div className="main-container2">
                <div className="txt-btn">
                    <p>Con Drops Argentina podrás acceder a los productos más competitivos del mercado, con la facildad y en la comodidad de tu hogar. Es muy fácil, entras, seleccionas tus productos y lo llevamos a tu puerta sin cargo! </p>
                    <div className="btn-registrar">
                        <button>Registrarme</button>
                    </div>
                </div>
                <img src={com} alt=""/>
            </div>
        </div>
    );
}