import { Container, Text } from "./styles";
import { BiTrash } from "react-icons/bi";
import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";

const CartList = ({ product }) => {
  const { removeCart } = useContext(CartContext);

  const value = product.price;
  return (
    <Container>
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <Text>
        <p>{product.name}</p>
        <p>R$ {value.toFixed(2)}</p>
      </Text>
      <div>
        <BiTrash onClick={() => removeCart(product.id)} />
      </div>
    </Container>
  );
};

export default CartList;
