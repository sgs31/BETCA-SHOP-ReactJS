import React from "react";
import "./styless/NavArticles.css";

const NavArticles = () => {
  return (
    <div className="categories-container">
      <div>
        <h2>CATEGORÍAS</h2>
        <h3>CATEGORÍAS</h3>
        <h4>CATEGORÍAS</h4>
      </div>
      <ul>
        <li>
          <a href="">Almacen</a>
        </li>
        <li>
          <a href="">Carnicería</a>
        </li>
        <li>
          <a href="">Higiene</a>
        </li>
        <li>
          <a href="">Kiosco</a>
        </li>
        <li>
          <a href="">Tech</a>
        </li>
        <li>
          <a href="">Verdulería</a>
        </li>
      </ul>
      <form className="stock-radio">
        <div>
          <input type="radio" id="stock" name="gender" value="stock" />
          <label for="stock">Stock disponible</label>
        </div>
        <div>
          <input type="radio" id="no-stock" name="gender" value="no-stock" />
          <label for="no-stock">Stock no disponible</label>
        </div>
      </form>
    </div>
  );
};

export default NavArticles;
