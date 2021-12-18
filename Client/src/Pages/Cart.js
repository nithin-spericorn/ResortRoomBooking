import React, { useState } from 'react'
import Banner from '../Components/Banner'
import { publicRequest } from '../requestMethods';
import classes from "./Cart.module.css"

const Cart = (props) => {
    let value=2;
    const [message,setMessage]=useState("")
    let p=props.fdprice+props.price
    console.log(p)
    console.log(props)
    if(props.nofd==="NaN"||"undefined"){
        value=1
    }else{
        value=props.nofd
    }
    const submithandler=()=>{
        const getProducts= async ()=>{
          try{
            const res = await publicRequest.post("user/book",{email:props.email,roomId:props.roomId})
            console.log(res.data.message)
            setMessage(res.data.message)
            //console.log(res.data)
    
          }catch(err){
            
          }
        }
        getProducts()
      }
    

   /* const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.round(Math.abs((new Date(props.sdate)-new Date(props.edate)) / oneDay));
    if(diffDays>1){
        p=p*days
    }*/
    /* To calculate the time difference of two dates
var Difference_In_Time = (props.edate).getTime() - (props.sdate).getTime();
  
// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);*/
    
    return (
        <div className="cart">
           <h5>room no:{props.roomId}</h5>
           <h5>Type:single</h5>
           <h4>Total:{(p*(props.nofd))||p}</h4>
           <h4>date:{props.sdate}-{"  "}To{"  "}-{props.edate}</h4>
           <h4>total days:{props.nofd||1}</h4>
           <button onClick={submithandler}>Book</button>
           {message}
            
        </div>

    )
}

export default Cart
