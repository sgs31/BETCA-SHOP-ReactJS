import React, {Component} from 'react';

export default class FormArticle extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Form article</h4>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Marca</label>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Descripcion</label>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Categoria</label>
                        <select name="" id="" className="form-control">
                            <option value="">Frutas y verduras</option>
                            <option value="">Carniceria</option>
                            <option value="">Almacen y kiosco</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Precio</label>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label>EAN</label>
                        <input className="form-control" type="text"/>
                    </div>
                    
                </div>
                <div className="card-footer">
                    <button className="btn btn-success">Registrar</button>
                </div>
            </div>
        );
    }
}