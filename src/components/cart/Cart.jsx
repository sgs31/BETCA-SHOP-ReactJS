import React from "react";
import "./Cart.css";
import CartEmpty from "./CartEmpty";
import { useSelector, useDispatch } from "react-redux";
import { deleteArticleFromCart } from "../../redux/cart/cart.actions";

const Cart = () => {
  const storedArticles = useSelector((state) => state.articles);
  const DeleteFromCart = (ean) => {
    const dispatch = useDispatch();
    dispatch(deleteArticleFromCart(ean));
  };

  if (this.state.articlesCart.length === 0) {
    return <CartEmpty />;
  } else {
    return (
      <div className="cart">
        <table>
          <thead>
            <th>Marca</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>EAN</th>
            <th>Cantidad</th>
          </thead>
          <tbody>
            {storedArticles.map((article, index) => {
              return (
                <tr key={index}>
                  <td>{article.marca}</td>
                  <td>{article.descripcion}</td>
                  <td>{article.precio}</td>
                  <td>{article.ean}</td>
                  <td>{article.cantidad}</td>
                  <td>
                    <button onClick={DeleteFromCart(article.ean)}>
                      ELIMINAR
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Cart;
