import styled from "styled-components";
import React, { useEffect, useState } from 'react'
//import {categories} from "../data"
import CategoryItem from './CategoryItem';
import { publicRequest } from "../requestMethods";


const Container=styled.div`
display:flex;
padding:20px;
justify-content: space-between;
`;

const Category = () => {
    const [categories,setCat]=useState([])

    useEffect(()=>{  
        const Category=async()=>{
            let res = await publicRequest.get("/user/AllCat")
            setCat(res.data.message)
        }
     Category()
    },[])
    console.log(categories)
    return (
        <Container>
            {categories.map((item)=>(<CategoryItem item={item} key={item.id}/>))}
        </Container>
    )
}

export default Category