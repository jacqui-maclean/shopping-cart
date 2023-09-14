import { Product } from "./ProductsContainer";

interface Props {
  cart: Product[];
  cartTotal: number;
  onAdd: (product: Product) => void;
  onMinus: (product: Product) => void;
}

const CartContainer = ({ cart, cartTotal, onAdd, onMinus }: Props) => {
  return (
    <>
      <div>CartContainer</div>;
      {/* I had misplaced the <ul></ul> tags within the code, and this was throwing an error in the console.
      I checked stackoverflow and for help, but this did not tell me anything new. Then I put the question to chatgpt
      with a code snippet and it highlighted the problem */}
      <ul>
        {cart.map((product: Product) => (
          <li key={product.id} style={{ listStyle: "none" }}>
            <h3>{product.quantity! > 0 && product.title}</h3>
            <p>
              {product.quantity! > 0 && ` price per item   £${product.price}`}
            </p>
            <p>{product.quantity! > 0 && product.quantity}</p>
            {product.quantity! > 0 && (
              <div>
                <button onClick={() => onMinus(product)}>-</button>
                <button onClick={() => onAdd(product)}>+</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <h4>Cart Total £{cartTotal.toFixed(2)}</h4>
    </>
  );
};

export default CartContainer;
