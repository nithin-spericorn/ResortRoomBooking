import React, { useEffect, useState } from 'react'
import { publicRequest } from '../../requestMethods'
import OrderItem from './OrderItem'


const Profile = () => {
    const [rooms,setRooms]=useState([])

    useEffect(()=>{  
        const getOrders=async()=>{
            let res = await publicRequest.get("/user/myorder/order")
            setRooms(res.data.message)
        }
     getOrders()
    },[])
    console.log(rooms)
    return (
        <div>
            <h1>Profile</h1>
            {rooms.map((item)=>(<OrderItem item={item} key={item.id}/>))}
        </div>
    )
}

export default Profile
