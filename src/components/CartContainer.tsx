import { Product } from "./ProductsContainer";

interface Props {
  cart: Product[];
  cartTotal: number;
}

const CartContainer = ({ cart, cartTotal }: Props) => {
  return (
    <>
      <div>CartContainer</div>;
      {cart.map((product: Product) => (
        <ul>
          <li style={{ listStyle: "none" }} key={product.id}>
            <h3>{product.quantity! > 0 && product.title}</h3>
            <p>
              {product.quantity! > 0 && ` price per item   £${product.price}`}
            </p>
            <p>{product.quantity! > 0 && product.quantity}</p>
          </li>
        </ul>
      ))}
      <h4>Cart Total £{cartTotal.toFixed(2)}</h4>
    </>
  );
};

export default CartContainer;
