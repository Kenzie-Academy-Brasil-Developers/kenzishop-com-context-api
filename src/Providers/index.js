import { ProductsProvider } from "./Products";
import { CartProvider } from "./Cart";

const Providers = ({ children }) => {
  return (
    <CartProvider>
      <ProductsProvider>{children}</ProductsProvider>;
    </CartProvider>
  );
};

export default Providers;
