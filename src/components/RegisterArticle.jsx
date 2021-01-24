import React, { Component } from 'react'
import './styles/RegisterArticle.css';

export default class RegisterArticle extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="register-article-form" action="">
                <h3><b>Registrar artículo</b></h3>
                <div>
                    <label>Marca</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Descripción</label>
                    <input type="text" />
                </div>
                <div>
                    <label>EAN</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Precio</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Stock</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Categoría</label>
                    <select name="" id="">
                        <option value="">Almacen</option>
                        <option value="">Kiosco</option>
                        <option value="">Higiene</option>
                        <option value="">Otro</option>
                    </select>
                </div>
                <div>
                    <input type="file" />
                </div>
                <button>Dar de alta</button>
            </form>
        );
    }
}