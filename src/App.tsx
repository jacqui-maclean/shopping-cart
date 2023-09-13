import { useState } from "react";
import products from "./assets/products.json";
import ProductsContainer from "./components/ProductsContainer";
import { Product } from "./components/ProductsContainer";
import CartContainer from "./components/CartContainer";

const App = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = (product: Product) => {
    // setCart([...cart, product]);
    if (cart.includes(product)) {
      // add 1 to the quantity of the product in the cart
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <div>
      <h2>Shopping Cart Example</h2>
      <hr />
      <ProductsContainer products={products} onAddToCart={addToCart} />
      <hr />
      <CartContainer cart={cart} cartTotal={cartTotal} />
    </div>
  );
};

export default App;
