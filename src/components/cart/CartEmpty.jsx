import cart from "../../assets/cart.png";

const CartEmpty = () => {
  return (
    <div className="cart-empty">
      <h2>¡OOPS! No hay artículos en el carrito</h2>
      <img src={cart} alt="" />
      <span>
        <a href="/productos">Buscar productos</a>
      </span>
    </div>
  );
};

export default CartEmpty;
