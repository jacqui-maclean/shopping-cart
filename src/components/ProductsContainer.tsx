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
      <ul>
        {products.map((product: Product) => (
          <li key={product.id} style={{ listStyle: "none" }}>
            <h3>{product.title}</h3>
            <p>£{product.price}</p>
            <div>
              {product.quantity! <= product.inventory! ? (
                <button onClick={() => onAddToCart(product)}>
                  Add to Cart
                </button>
              ) : (
                <p>Out of Stock</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsContainer;
