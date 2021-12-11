import CartList from "../../components/CartList";
import { Container, ContainerCart, Total } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";

const Cart = () => {
  const { shoppingCart } = useContext(CartContext);
  console.log(shoppingCart);

  return (
    <Container>
      <ContainerCart>
        {shoppingCart.map((product) => (
          <CartList key={product.id} product={product} />
        ))}
      </ContainerCart>
      <Total>
        <h4>Resumo do pedido:</h4>
        <p>{shoppingCart.length} produtos</p>
        <p>
          R$
          {shoppingCart
            .reduce((acc, valorAtual) => acc + valorAtual.price, 0)
            .toFixed(2)}
        </p>
      </Total>
    </Container>
  );
};

export default Cart;
