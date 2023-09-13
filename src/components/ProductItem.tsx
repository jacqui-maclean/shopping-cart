import { Product } from "./ProductsContainer";

const ProductItem = (product: Product) => {
  return (
    <div>
      ProductItem
      <h3>{product.title}</h3>
      {/* <p>` £ ${product.price}`</p> */}
      {/* {quantity ? ` x ${quantity}` : null} */}
    </div>
  );
};

export default ProductItem;
