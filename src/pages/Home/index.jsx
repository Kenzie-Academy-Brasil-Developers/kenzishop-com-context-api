import Product from "../../components/Product";
import { ProductList } from "./styles";
import LayoutContainer from "../../components/LayoutContainer";
import { useContext } from "react";
import { ProductsContext } from "../../Providers/Products";

const Home = () => {
  const { products } = useContext(ProductsContext);

  return (
    <LayoutContainer>
      <ProductList>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductList>
    </LayoutContainer>
  );
};

export default Home;
