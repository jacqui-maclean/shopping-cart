import { useEffect, useState } from "react";
import products from "./assets/products.json";
import ProductsContainer from "./components/ProductsContainer";
import { Product } from "./components/ProductsContainer";
import CartContainer from "./components/CartContainer";

const App = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const initialisedCart: Product[] = [...products];
    initialisedCart.forEach((item) => {
      item.quantity = 0;
    });
    setCart(initialisedCart);
  }, []);

  const addToCart = (product: Product) => {
    const updatedCart = [...cart];
    updatedCart.forEach((item) => {
      if (item.id === product.id) {
        item.quantity! += 1;
      }
    });
    setCart([...updatedCart]);
    // }
    setCartTotal(cartTotal + product.price);
  };

  const minusOne = (product: Product) => {
    const updatedCart = [...cart];
    updatedCart.forEach((item) => {
      if (item.id === product.id) {
        item.quantity! -= 1;
      }
    });
    setCart([...updatedCart]);
    // }
    setCartTotal(cartTotal - product.price);
  };

  return (
    <div>
      <h2>Shopping Cart Example</h2>
      <hr />
      <ProductsContainer products={products} onAddToCart={addToCart} />
      <hr />
      <CartContainer
        cart={cart}
        cartTotal={cartTotal}
        onAdd={addToCart}
        onMinus={minusOne}
      />
    </div>
  );
};

export default App;
