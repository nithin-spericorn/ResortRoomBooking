import {createSlice} from "@reduxjs/toolkit" 

const CartSlice=createSlice({
    name:"cart",
    initialState:{
        rooms:[],
       
    },
    reducers:{
        addRoom:(state,action)=>{
    
            state.rooms.push(action.payload)

          
            
        },
        removeRoom:(state,action)=>{
            state.rooms=action.payload
        }
       
    }             
    })
export const {addRoom,removeRoom}=CartSlice.actions
export default CartSlice.reducer;

