import styled from "styled-components";
import React from 'react'


import { Link } from "react-router-dom";




const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 7rem;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:blue;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const OrderItem= ({item}) => {
    return (
        <Container>
          
            <Info>
                <Title>orderId:{item.order_id}</Title>
                <h1>RoomId:{item.room_id}</h1>
                <h3>price:{item.price}</h3>
            </Info>
            
        </Container>
    )
}

export default OrderItem