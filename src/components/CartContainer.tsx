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
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>£{product.price}</p>
          </li>
        </ul>
      ))}
      <h4>Cart Total £{cartTotal}</h4>
    </>
  );
};

export default CartContainer;
