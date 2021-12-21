
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Banner from './Components/Banner/banner';
import Category from './Components/Category';

import MainHeader from './Components/MainHeader';

import Rooms from './Components/Rooms';
import {Room} from './Pages/Room';
import Home from './Pages/Home';
import {Login} from './Pages/Login';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Register';
import { RoomList } from './Pages/RoomList';
import Guest from './Pages/Guest';
import userCart from './Pages/userCart';
import {UserBook} from './Pages/userBook';
import jwt from "jsonwebtoken"



function App() {

  const [showLogin,setLogin]=useState(true)

  const token=useSelector(state=>state.user.currentUser);
  /*let user=token.isAdmin===0;
  let admin=token.isAdmin===1;*/
  //hai nithin
  var decoded = jwt.decode(token);
 let isAdmin
  
  if(decoded){
    isAdmin=decoded.isAdmin
  }
  const closeLogin=()=>{
    setLogin(false)
   }
  return (
  
      <Router>
        
      <MainHeader/>
       <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/gst/:id" component={Guest}/>
       <Route exact path="/p"><Profile/></Route>
       <Route exact path="/userbook/:id" component={UserBook}/>
       <Route exact path="/login">
          
           {token?<Category/>:<Login/>}
         
       </Route>
         
       <Route exact path="/register">
       <Register/>
       </Route>
       <Route exact path="/rooms">
       <Category/>
       </Route>
        <Route exact path="/rooms/:category"> <RoomList/> </Route>
         <Route  exact path="/:id"> <Room/> </Route>
    
      
       </Switch>
    </Router>
  );
}

export default App;