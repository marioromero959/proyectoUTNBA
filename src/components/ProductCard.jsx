// ProductCard.jsx
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  text-align: center;
  width: 230px; /* Ajusta el ancho según sea necesario */
  display: flex;
  flex-direction: column;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #333; 
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const ProductName = styled.h2`
  font-size: 26px;
  margin-bottom: 8px;
`;

const ProductPrice = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  color: ${(props) => (props.$oferta ? 'red' : 'inherit')};
`;

const ProductDescription = styled.p`
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 60px;
`;

const ProductCard = ({ producto }) => {
  return (
    <CardContainer>
      <ProductImage src={producto.img} alt={producto.nombre} />
      <ProductName>{producto.nombre}</ProductName>

{ producto.oferta ? 
        <ProductPrice $oferta={producto.oferta}>Precio en oferta: ${producto.precio * 0.8}</ProductPrice>
        :
        <ProductPrice >Precio: ${producto.precio}</ProductPrice>
}

      <ProductDescription>{producto.descripcion}</ProductDescription>
    </CardContainer>
  );
};

export default ProductCard;
