
//import { Add, Remove } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation,Link,useHistory} from 'react-router-dom';
import styled from 'styled-components'


import { publicRequest } from '../requestMethods';


const Container=styled.div``;

const Wrapper=styled.div`
padding:50px;
display:flex;`


const ImgContainer=styled.div`
flex:1;
`


const Image=styled.img`
width:100%;
height:80vh;
object-fit:cover;`;


const InfoContainer=styled.div`
flex:1;
padding:0px 50px;
`


const Title=styled.h1`
font-weight:200`;

const Desc=styled.p`
margin:20px 0px;`;

const Price=styled.span`
font-weight: 100;
  font-size: 40px;`;

  const FilterContainer=styled.div`
  width:50%;
  margin:30px 0px;
  display:flex;
  justify-Content:space-between;`



  const Filter=styled.div`
  display:flex;
  align-items:center;`;

  const FilterText=styled.h1``;

  const FilterColor=styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;`;

  const FilterSize=styled.select`
  margin-left:10px;
  padding:5px;`;

  const FilterSizeOption=styled.option``;

  const FilterTitle=styled.span`
  font-size:20px;
  font-weight:200;`;

  const AddContainer=styled.div`
  width:50%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  `;

  const AmountContainer=styled.div`
  display:flex;
  align-items:center;
  font-weight:700;`;

  

  const Amount=styled.div`
  width:30px;
  height:30px;
  border-radius:10px;
  border: 1px solid teal;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0px 5px;
`;

 

  const Button=styled.button`
  padding:15px;
  border: 1px solid teal;
  order: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color:#f8f4f4;
  }
  `




export const Room = () => {
  const location=useLocation()
  const id=location.pathname.split("/")[1]
   console.log(id)
  const [product,setProduct]=useState({})

  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch=useDispatch()
  let user=false
  const User=useSelector(state=>state.user)
  if(User.currentUser!==null){
    user=true
  }
  //console.log(product.color)
  useEffect(()=>{
    const getProducts= async ()=>{
      try{
        const res = await publicRequest.get("user/"+id)
        console.log(res.data.message)
        setProduct(res.data.message)
        console.log(res.data.message)

      }catch(err){
        
      }
    }
    getProducts()
  },[id])

 const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const history=useHistory()
  
  const handleBooking=(id)=>{
    console.log(id)
  history.push(`/user/${id}`)

    //{user && <Link to="/profile"/>}
    //update cart
    //dispatch(addProduct({product,quantity,color,size,price:product.price*quantity}))
   // dispatch(addProduct({...product,quantity,color,size,price:product.price*quantity}))

  }
  const sizehandle=(s)=>{
    setSize(s)
  }
//console.log(product.room_title)
    return (
        <Container>
           
            <Wrapper>
            <ImgContainer>
          <Image src={product.room_img}/>
        </ImgContainer>
        <InfoContainer>
          <Title>{product.room_title}</Title>
          <Desc>
            {"is very nice room"}
          </Desc>
          <Price>$ {product.room_price}</Price>
         

          <AddContainer>

              <AmountContainer>
                 
              </AmountContainer>
              {user && <Link to={`/userbook/${id}`}><Button >Booking</Button></Link>}
              {!user && <Link to={`gst/${id}`} className="btn-primary">
          Booking
        </Link> }
              {!user &&<p>if youe not a guest you need to first login for room booking<Link to="/login">Login</Link></p>}
          </AddContainer>
        
          </InfoContainer>
            </Wrapper>
           
        </Container>
    )
}
