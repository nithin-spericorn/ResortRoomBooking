
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { publicRequest } from '../requestMethods';


const Container=styled.div`
display:flex;
padding:20px;
flex-wrap: wrap;
justify-content:space-between;`;
const Img=styled.img`
height:8rem;
`;

const Rooms = ({cat,filters,sort}) => {
    console.log(cat,filters,sort)
    const [products,setProducts]=useState([])
    const [filteredProducts,setFilteredProducts]=useState([])
    useEffect(()=>{
         const getProducts = async ()=>{
            try{
                const res=await publicRequest.get(`/user/rooms?category=${cat}`)
               console.log(res.data.message)
               setProducts(res.data.message)
            }catch(err){

            }
        }
        getProducts()
    },[cat])
    useEffect(()=>{
   cat && setFilteredProducts(products)
    },[products,cat,filters])

    useEffect(()=>{
        if(sort==="newest"){
            setFilteredProducts(prev=>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
                )
        }else if (sort === "asc") {
            setFilteredProducts((prev) =>
              [...prev].sort((a, b) => a.price - b.price)
            );
          } else {
            setFilteredProducts((prev) =>
              [...prev].sort((a, b) => b.price - a.price)
            );
          }
    },[sort])
    return (
        <Container>
          {filteredProducts.map((item)=>(
            
            <div>
        
        <div>
          <Img src={item.room_img}/>
          <h6>{item.room_price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/${item.room_id}`} className="btn-primary" key={item.room_id}>
          features
        </Link>
    </div>
    ))}
      
    <section>
        
        <div>
          <Img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?cs=srgb&dl=pexels-jean-van-der-meulen-1457842.jpg&fm=jpg" alt="a"/>
          <h6>${20}</h6>
          <p>per night</p>
        </div>
        <Link to={`/`} className="btn-primary">
          features
        </Link>
    
      <p>"room info"</p>
    </section>
      
    <section>
        
        <div>
          <Img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?cs=srgb&dl=pexels-jean-van-der-meulen-1457842.jpg&fm=jpg" alt="a"/>
          <h6>${20}</h6>
          <p>per night</p>
        </div>
        <Link to={`/id`} className="btn-primary">
          features
        </Link>
    
      <p>"room info"</p>
    </section>
    <section>
        
        <div>
          <Img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?cs=srgb&dl=pexels-jean-van-der-meulen-1457842.jpg&fm=jpg" alt="a"/>
          <h6>${20}</h6>
          <p>per night</p>
        </div>
        <Link to={`/id`} className="btn-primary">
          features
        </Link>
    
      <p>"room info"</p>
    </section>
        </Container>
    )
}

export default Rooms





/*import React from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import Hero from './Hero'
import "./room.module.css"

const Room = () => {
    return (
        <Hero>
            
            <article className="room">
      <div className="img-container">
        <img src="" alt="single room" />
        <div className="price-top">
          <h6>${20}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/id`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">"room info"</p>
    </article>
        
            
        </Hero>
    )
}

export default Room*/
