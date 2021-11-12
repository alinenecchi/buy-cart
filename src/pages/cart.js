import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { CartContext } from "../context/CartContext";
import { formatToMoney } from "../scripts/formatToMoney";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import api from "../services/api";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";
import { Container, Header, FooterCart} from "../styles/pages/Cart";
import Products from "../components/Products/Products";

const Cart = () => {
  const [products, setProducts] = useState(null);

  const { contentCart } = useContext(CartContext);

  useEffect(() => {
    api.get(contentCart).then((response) => setProducts(response.data[0]));
  }, []);

  console.log(products);
  return (
    <Container>
      <Wrapper>
        <Header>
          <Link href="/">
            <a>
              <HiOutlineArrowNarrowLeft />
            </a>
          </Link>
          <h1>Meu carrinho</h1>
        </Header>

        <Products data={products} />

        <FooterCart>
          
          <div className="line">
            <span>Total</span>
            <span>{products && formatToMoney(products?.value)}</span>
          </div>
          {products && products.value > 1000 && 
            <small className="small">Parabéns, sua compra tem frete grátis!</small>
          }
        </FooterCart>
        <div className="button">
            <Button value="Finalizar compra" />
        </div>

      </Wrapper>
    </Container>
  );
};

export default Cart;
