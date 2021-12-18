import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import  {addRoom,removeRoom} from "../redux/CartRedux"
import { publicRequest } from '../requestMethods'

const Container=styled.div`
display:flex;
flex-direction:column;
height:80vh;
width:20rem;
color:red;
background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,240,150,1));
border-radius: 25px;
border: 2px solid #73AD21;`

const Img=styled.div`
height:10rem;
width:12rem;`;


const UserCart = (props) => {
    console.log(props)
    const [message,setMessage]=useState("")
    const [res,setR]=useState("")
    let p=props.fdprice+props.price
    let value;
    if(props.nofd==="NaN"||"undefined"){
        value=1
    }else{
        value=props.nofd
    }
    const cart=useSelector(state=>state.cart)
    let room=props.room;
    console.log(props.room)
   const dispatch=useDispatch()
   
  
    const saveandremove=async(id,price)=>{
      
        const result= await publicRequest.post("/user/order",{roomId:id,price:price})
        

        
        if(result.data.message==="successfully ordered"){
            alert("you successfully booked current item")
            const newRooms=cart.rooms.filter(e=>e.id!==id)
            console.log("newrooms",newRooms)
            dispatch(removeRoom(newRooms))
        }else{
            alert(result.data.message)
        }
    }
console.log("show",cart)
//console.log(cart.rooms[0].img)

    return (
        <Container>
            
           <h1>Cart</h1>

                      
                      {cart.rooms && cart.rooms.map(room=>( 
                           <div key={room.id}>
                               <h1>RoomID:{room.id}-Price{room.price}</h1>
                              <button onClick={()=>{ saveandremove(room.id,room.price)}} >Book this</button>
                            
                           </div>
                           
                           
                       ))}
                       
                   
                   
            
        
        </Container>
    )
}

export default UserCart
