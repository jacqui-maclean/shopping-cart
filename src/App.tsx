//NOTES ABOUT HOW THIS TASK WASMAPPROACHED IS IN README.md

import { useEffect, useState } from "react";
import products from "./assets/products.json";
import ProductsContainer from "./components/ProductsContainer";
import { Product } from "./components/ProductsContainer";
import CartContainer from "./components/CartContainer";

const App = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [isError, setIsError] = useState(false);

  //used a code from a previous project to fetch data from an API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://0cf937f5-a71f-4b17-9a50-5895d739c295.mock.pstmn.io/products"
        );
        let results = await response.json();
        let fetchedProducts = results;
        const initialisedCart: Product[] = [...fetchedProducts];
        initialisedCart.forEach((item) => {
          item.quantity = 0;
        });
        setCart(initialisedCart);
      } catch (error) {
        //if I had more time would improve error handling
        //would incorporate reactQuery for free retries
        console.log("error ", error);
        setIsError(true);
      }
    };
    fetchProducts();
  }, []);

  //referred back to Mosh Hamedani's React18 course for this useEffect
  // useEffect(() => {
  //   const initialisedCart: Product[] = [...products];
  //   initialisedCart.forEach((item) => {
  //     item.quantity = 0;
  //   });
  //   setCart(initialisedCart);
  // }, []);

  const addToCart = (product: Product) => {
    const updatedCart = [...cart];
    //used developer.mozilla.org because updatedCart.includes(product) was not working (it doesn't work if the array contains objects)
    //if the products list was longer would use an ordinary for loop as you can break out of that as soon as you find the added product rather than traversing tho whole array
    updatedCart.forEach((item) => {
      if (item.id === product.id) {
        item.quantity! += 1;
      }
    });
    setCart([...updatedCart]);
    setCartTotal(cartTotal + product.price);
  };

  ///if I had more time I would like to refactor this to be more DRY (eg combine addToCart and minusOne into one function)
  const minusOne = (product: Product) => {
    const updatedCart = [...cart];
    updatedCart.forEach((item) => {
      if (item.id === product.id) {
        item.quantity! -= 1;
      }
    });
    setCart([...updatedCart]);
    setCartTotal(cartTotal - product.price);
  };

  return (
    <div>
      <h2>Shopping Cart Example</h2>
      <hr />
      <ProductsContainer products={cart} onAddToCart={addToCart} />
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
