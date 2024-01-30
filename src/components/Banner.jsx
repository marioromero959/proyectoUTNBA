import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  margin: 16px 0;
  text-align: center;
  width:100%;
  height:150px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  transition: background-color 0.3s ease;
  background:url( ${(props) => (props.fondo)});

  &:hover {
    background-color: #a0a0a0; 
  }
`;




function Banner({titulo,fondo}) {
  return (
    <BannerContainer style={{ backgroundImage: `url(${fondo})` }}>
      <h2 style={{fontSize:'55px'}} >{titulo}</h2>
    </BannerContainer>
  );
}

export default Banner;
