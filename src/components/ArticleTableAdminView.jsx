import React, { Component } from 'react';
import './styles/ArticleTableAdminView.css'
import close from '../assets/close.svg';
import edit from '../assets/edit.svg';


export default class ArticleTableAdminView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <table className="table">
                <thead className="thead-dark">
                    <th scope="col">Marca</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Precio</th>
                    <th scope="col">EAN</th>
                    <th><button>Agregar producto</button></th>
                </thead>
                <tbody>
                    <tr>
                        <td>Pampers</td>
                        <td>Paniales packx20</td>
                        <td>Higiene</td>
                        <td>230</td>
                        <td>844529</td>
                        <td>
                            <div className="edit-row">
                                <a href=""><img src={edit} /></a>
                                <a href=""><img src={close} /></a>
                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td>Luchetti</td>
                        <td>Fideos espagueti</td>
                        <td>Almacen</td>
                        <td>75</td>
                        <td>255684</td>
                        <td><div className="edit-row">
                            <a href=""><img src={edit} /></a>
                            <a href=""><img src={close} /></a>
                        </div></td>
                    </tr>
                    <tr>
                        <td>Terrabusi</td>
                        <td>Surtidas 500g</td>
                        <td>Galletitas</td>
                        <td>120</td>
                        <td>288903</td>
                        <td><div className="edit-row">
                            <a href=""><img src={edit} /></a>
                            <a href=""><img src={close} /></a>
                        </div></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxx</td>
                        <td>xxxxxxx xxg</td>
                        <td>xxxxxx</td>
                        <td>xxxx</td>
                        <td>xxxxxx</td>
                        <td><div className="edit-row">
                            <a href=""><img src={edit} /></a>
                            <a href=""><img src={close} /></a>
                        </div></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxx</td>
                        <td>xxxxxxx xxg</td>
                        <td>xxxxxx</td>
                        <td>xxxx</td>
                        <td>xxxxxx</td>
                        <td><div className="edit-row">
                            <a href=""><img src={edit} /></a>
                            <a href=""><img src={close} /></a>
                        </div></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxx</td>
                        <td>xxxxxxx xxg</td>
                        <td>xxxxxx</td>
                        <td>xxxx</td>
                        <td>xxxxxx</td>
                        <td><div className="edit-row">
                            <a href=""><img src={edit} /></a>
                            <a href=""><img src={close} /></a>
                        </div></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxx</td>
                        <td>xxxxxxx xxg</td>
                        <td>xxxxxx</td>
                        <td>xxxx</td>
                        <td>xxxxxx</td>
                        <td><div className="edit-row">
                            <a href=""><img src={edit} /></a>
                            <a href=""><img src={close} /></a>
                        </div></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxx</td>
                        <td>xxxxxxx xxg</td>
                        <td>xxxxxx</td>
                        <td>xxxx</td>
                        <td>xxxxxx</td>
                        <td><div className="edit-row">
                            <a href=""><img src={edit} /></a>
                            <a href=""><img src={close} /></a>
                        </div></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxx</td>
                        <td>xxxxxxx xxg</td>
                        <td>xxxxxx</td>
                        <td>xxxx</td>
                        <td>xxxxxx</td>
                        <td><div className="edit-row">
                            <a href=""><img src={edit} /></a>
                            <a href=""><img src={close} /></a>
                        </div></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxx</td>
                        <td>xxxxxxx xxg</td>
                        <td>xxxxxx</td>
                        <td>xxxx</td>
                        <td>xxxxxx</td>
                        <td><div className="edit-row">
                            <a href=""><img src={edit} /></a>
                            <a href=""><img src={close} /></a>
                        </div></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxx</td>
                        <td>xxxxxxx xxg</td>
                        <td>xxxxxx</td>
                        <td>xxxx</td>
                        <td>xxxxxx</td>
                        <td><div className="edit-row">
                            <a href=""><img src={edit} /></a>
                            <a href=""><img src={close} /></a>
                        </div></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxx</td>
                        <td>xxxxxxx xxg</td>
                        <td>xxxxxx</td>
                        <td>xxxx</td>
                        <td>xxxxxx</td>
                        <td><div className="edit-row">
                            <a href=""><img src={edit} /></a>
                            <a href=""><img src={close} /></a>
                        </div></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxx</td>
                        <td>xxxxxxx xxg</td>
                        <td>xxxxxx</td>
                        <td>xxxx</td>
                        <td>xxxxxx</td>
                        <td><div className="edit-row">
                            <a href=""><img src={edit} /></a>
                            <a href=""><img src={close} /></a>
                        </div></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxx</td>
                        <td>xxxxxxx xxg</td>
                        <td>xxxxxx</td>
                        <td>xxxx</td>
                        <td>xxxxxx</td>
                        <td><div className="edit-row">
                            <a href=""><img src={edit} /></a>
                            <a href=""><img src={close} /></a>
                        </div></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxx</td>
                        <td>xxxxxxx xxg</td>
                        <td>xxxxxx</td>
                        <td>xxxx</td>
                        <td>xxxxxx</td>
                        <td><div className="edit-row">
                            <a href=""><img src={edit} /></a>
                            <a href=""><img src={close} /></a>
                        </div></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxx</td>
                        <td>xxxxxxx xxg</td>
                        <td>xxxxxx</td>
                        <td>xxxx</td>
                        <td>xxxxxx</td>
                        <td><div className="edit-row">
                            <a href=""><img src={edit} /></a>
                            <a href=""><img src={close} /></a>
                        </div></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxx</td>
                        <td>xxxxxxx xxg</td>
                        <td>xxxxxx</td>
                        <td>xxxx</td>
                        <td>xxxxxx</td>
                        <td><div className="edit-row">
                            <a href=""><img src={edit} /></a>
                            <a href=""><img src={close} /></a>
                        </div></td>
                    </tr>
                    <tr>
                        <td>xxxxxxxx</td>
                        <td>xxxxxxx xxg</td>
                        <td>xxxxxx</td>
                        <td>xxxx</td>
                        <td>xxxxxx</td>
                        <td><div className="edit-row">
                            <a href=""><img src={edit} /></a>
                            <a href=""><img src={close} /></a>
                        </div></td>
                    </tr>
                    

                </tbody>
            </table>

        );
    }
}