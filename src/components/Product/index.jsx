import { Button, Container, Image, Paragraph, Text } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";

const Product = ({ product }) => {
  const { addCart } = useContext(CartContext);

  return (
    <Container>
      <Image>
        <img src={product.image} alt={product.name} />
      </Image>
      <Text>
        <h5>{product.name}.</h5>
        <Paragraph>{product.description}. </Paragraph>
        <span>{product.categorie}</span>
        <Paragraph priceSchema>R$ {product.price.toFixed(2)} </Paragraph>
      </Text>
      <Button>
        <button type="button" onClick={() => addCart(product)}>
          Adicionar ao carrinho
        </button>
      </Button>
    </Container>
  );
};

export default Product;
