import React, { useState } from 'react'
import styled from 'styled-components'
import Rooms from "../Components/Rooms"


import { useHistory, useLocation } from 'react-router-dom';



const Container=styled.div``;

const Title=styled.h1``;

const FilterContainer=styled.div`
display:flex;
justify-content:space-between;`;

const Filter=styled.div`
margin:20px;`;


const FilterText=styled.span`
font-size:20px;
font-weight:600px;
padding:10px;
`;

const Select=styled.select`
padding:10px;
margin-right: 20px;
`;

const Option=styled.option``;

export const RoomList = () => {
  const location=useLocation()
  const cat=location.pathname.split("/")[2]
  console.log(cat)
  const [filters,setFilter]=useState({})
  const [sort,setSort]=useState("newest")

  const handleFilters=(e)=>{
  const value=e.target.value;
  setFilter({...filters,
    [e.target.name]:value})
  }
  //console.log(filters)
  //console.log(sort)
    return (
        <Container>
            
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                <FilterText>
                    filter products:
                    </FilterText>
                    <Select name="color" onClick={handleFilters}>
            <Option disabled >
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size"onClick={handleFilters}>
            <Option disabled >
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
                </Filter>
                <Filter>
                    <FilterText>
                    sort products:
                    </FilterText>
                    <Select onChange={(e)=>setSort(e.target.value)}>
            <Option value="newest" >Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
                </Filter>
            </FilterContainer>
            <Rooms cat={cat} filters={filters} sort={sort}/>
            
            
        </Container>
    )
}
