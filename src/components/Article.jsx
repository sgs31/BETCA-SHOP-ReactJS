import React, { Component } from 'react'
import './styles/Article.css';



export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cant: 1
        }
    
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
        this.add = this.add.bind(this);
    }
        decrement() {
            if(this.state.cant>1){
                this.setState({
                    cant: this.state.cant - 1
                });
            }
            
        }

        increment() {
            if(this.state.cant<20){
                this.setState({
                    cant: this.state.cant + 1
                });
            }
        }

        add(){
            this.setState({
                cant: 1
            })
            
        }
        
    

    render() {

        const { img, marca, descripcion, precio, ean } = this.props.articles;

        const alertSuccess = <div class="alert alert-success" role="alert">
            Has agregado con éxito {this.state.cant}. Give it a click if you like.
          </div>

        

        return (
            <div className="card">
                <div className="card-header">
                    <img src={img} alt="" />
                </div>
                <div className="card-body">
                    <h5>{marca}</h5>
                    <span>{descripcion}</span>
                    <span>${precio}</span>
                    <span>{ean}</span>
                </div>
                <div className="card-footer">
                    <div className="cant-handler">
                        <button className="btn-cant" onClick={this.decrement}>-</button>
                        <span>{this.state.cant}</span>
                        <button className="btn-cant" onClick={this.increment}>+</button>
                    </div>
                    <div>
                        <button onClick={this.add} className="btn-add">Agregar</button>
                    </div>
                </div>
            </div>
        );
    }
}