export interface Product {
  id: number;
  title: string;
  price: number;
  inventory?: number;
  quantity?: number;
}

interface Props {
  products: Product[];
  onAddToCart: (product: Product) => void;
}
const ProductsContainer = ({ products, onAddToCart }: Props) => {
  return (
    <>
      <div>ProductsContainer</div>
      {products.map((product: Product) => (
        <ul>
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>£{product.price}</p>
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
          </li>
        </ul>
      ))}
    </>
  );
};

export default ProductsContainer;
