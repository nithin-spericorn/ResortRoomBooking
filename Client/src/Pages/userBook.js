import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation,Link,useHistory} from 'react-router-dom';
import styled from 'styled-components'
import { addRommFailer, addRoom } from '../redux/CartRedux';


import { publicRequest } from '../requestMethods';
import Cart from './Cart';
import UserCart from './userCart';



const Container=styled.div`
display:flex;`


const Wrapper=styled.div`
padding:50px;
flex:3;
display:flex;`
const WrapperF=styled.div`
padding:50px;
flex:1;`
const WrapperC=styled.div`
padding:50px;
flex:1;`



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

export const UserBook = () => {
  const dispatch=useDispatch()
  const cart=useSelector(state=>state.cart)
  console.log("cart",cart.rooms)
  /*let s=cart.rooms?  cart.rooms.find(e=>e.id===1):null
  console.log("s",s)*/
   const [show,setShow]=useState(false)
    const [email,setEmail]=useState("")
    const [sdate,setSDate]=useState()
    const [edate,setEDate]=useState()
    const [numberofdays,setNumberOfDays]=useState(0)
     const [option1,setOption1]= useState({totals:0})
  const [option2,setOption2]= useState({totals:0})
  const [option3,setOption3]= useState({totals:0})
   const [price,setprice]=useState(0)
  
    const [filters,setFilter]=useState({})
    const [showfood,setshowfood]=useState(false)
    const [fp,setFP]=useState(0)
    const location=useLocation()
    const id=location.pathname.split("/")[2]
     console.log(id)
  
    const [product,setProduct]=useState({})
  
    const [quantity, setQuantity] = useState(1);
    useEffect(()=>{
      const getProducts= async ()=>{
        try{
          const res = await publicRequest.get("user/"+id)
          const {message}=res.data
          console.log(res.data.message)
          setProduct(res.data.message)
          //console.log(res.data)
  
        }catch(err){
          
        }
      }
      getProducts()
    },[id])
    const onChangeValue=(event)=> {
      console.log(event.target.value);
      if(event.target.value==='yes')
      setshowfood(true)
      else
      setshowfood(false)
    }
    const handleFood = (event) => {
      setOption1((pre)=> ({...pre,totals:event.target.value}))
    
    }
    const handleFood2 = (event) =>{
      setOption2((pre)=> ({...pre,totals:event.target.value}))
      
      
    }
    const handleFood3 = (event) => {
      setOption3((pre)=> ({...pre,totals:event.target.value}))  
      
    }
      
  
  
  
    const handleFilters=(e)=>{
      
      const value=e.target.value;
  
    
      
      var index = e.nativeEvent.target.selectedIndex;
      var text =e.nativeEvent.target[index].text;
      console.log(text);
      setFilter({...filters,
        [e.target.name]:text})
        console.log(filters)
      
       
      }
      const f=(e)=>{
     let v=e.target.value
     console.log(v)
  
      }
  
      const sbookdate=(e)=>{
      console.log(e.target.value)
      setSDate(e.target.value);
      console.log(sdate)
      }
      const ebookdate=(e)=>{
        console.log(e.target.value)
        setEDate(e.target.value);
        console.log(edate)
        }
        let h=1;
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        let diffDays = Math.round(Math.abs((new Date(edate)-new Date(sdate)) / oneDay));
        
          console.log(diffDays,"no of days")
    
  
    console.log(parseInt(option1.totals)+parseInt(option2.totals)+parseInt(option3.totals),"price")
  
    let room=product;
    let days=1;
    let total=300;
    //const cart=useSelector(state=>state.cart)
const addToCart=(id)=>{
  
  const ex=cart.rooms.find(e=>e.id===id)
  if(!ex){
    
  

  
  dispatch(addRoom({"img":product.room_img,"room_type":product.room_title,"id":product.room_id,"price":product.room_price}))
  
  }else{
    alert("item already in cart")
  }
}

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
      <h2>need food?</h2>
      <div onChange={onChangeValue}>
          <input type="radio" value="yes" name="gender" /> Yes
          <input type="radio" value="no" name="gender" /> No
          
        </div>
        <div className="date">
  
       <h3>select chekin date <input type="date" onChange={sbookdate}/></h3>
       <h3>select checkout date <input type="date" onChange={ebookdate}/></h3>
        </div>
        {showfood && <div className="food">
          <div>
            <h3>Breakfast</h3>
        <select name="breakfast" onChange={handleFilters,handleFood}>
              <option  >
                select food
              </option>
              <option value="10">biriyani-10</option>
              <option value="20">black cofee-20</option>
              <option value="30">dosha-30</option>
              <option value="40">puttu-40</option>   
              
            </select>
            </div>
            <div>
              <h3>Lunch</h3>
            <select name="lunch" onChange={handleFilters,handleFood2}>
              <option  >
                select food
              </option>
              <option value="10">biriyani-100</option>
              <option value="20">black cofee</option>
              <option value="30">dosha</option>
              <option value="40">puttu</option>   
              
            </select>
            </div>
            <div>
              <h3>Dinner</h3>
            <select name="dinner" onChange={handleFilters,handleFood3}>
              <option  >
                select food
              </option>
              <option value="10">biriyani-100</option>
              <option value="20">black cofee</option>
              <option value="30">dosha</option>
              <option value="40">puttu</option>   
              
            </select>
            </div>
            
            
            </div>
            }
            <label >Email</label>
           <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
           <div>
             <button onClick={()=>{addToCart(product.room_id)}}>AddToCart</button>
           </div>
      </InfoContainer>
     
      </Wrapper>
      <WrapperC>
        <UserCart room={product}
        title={product.room_title} price={product.room_price} roomId={product.room_id} 
        fdprice={parseInt(option1.totals)+parseInt(option2.totals)+parseInt(option3.totals)} sdate={sdate} edate={edate} nofd={diffDays} email={email} show={show} />
      </WrapperC>
  
      </Container>
    )
}


