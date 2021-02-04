import React, { useState } from "react";
import "./styless/Article.css";
import { useDispatch } from "react-redux";
import { addArticleToCart } from "../../redux/cart/cart.actions";

const Article = () => {
  const [cantArticles, setCantArticles] = useState(0);

  const decrement = () => {
    if (this.state.cantArticles > 1) {
      setCantArticles({
        cantArticles: state.cantArticles - 1,
      });
    }
  };

  const increment = () => {
    if (this.state.cant < 20) {
      this.setCantArticles({
        cant: state.cantArticles + 1,
      });
    }
  };
  const addArticleToTheCart = () => {
    const dispatch = useDispatch();
    dispatch(
      addArticleToCart({
        marca: marca,
        descripcion: descripcion,
        precio: precio,
        ean: ean,
        cantidad: cantArticles,
      })
    );
  };

  const { img, marca, descripcion, precio, ean } = props;

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
          <button className="btn-cant" onClick={decrement}>
            -
          </button>
          <span>{state.cantArticles}</span>
          <button className="btn-cant" onClick={increment}>
            +
          </button>
        </div>
        <div>
          <button onClick={addArticleToTheCart} className="btn-add">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Article;
