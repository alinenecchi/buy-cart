import React from "react";
import { formatToMoney } from "../../scripts/formatToMoney";
import {
  Container,
  Price,
  ImageContainer,
} from "../../styles/components/Products/Product";

const Product = ({ data }) => {
  return (
    <Container>
      <ImageContainer>
        <img className="image" src={data.imageUrl} alt={data.name} />
        <h2>{data.name}</h2>
      </ImageContainer>

      <Price>
        <span>{formatToMoney(data.price)}</span>
        <p>{formatToMoney(data.sellingPrice)}</p>
      </Price>
    </Container>
  );
};

export default Product;
