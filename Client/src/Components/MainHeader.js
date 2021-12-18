import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Login from '../Pages/Login';
import { Logout } from '../redux/apiCall';
import Banner from './Banner/banner';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  const dispatch=useDispatch()
  const [showBanner,setShowBanner]=useState(true)
  const show=()=>{
    setShowBanner(false)
  }
let user=false
  const User=useSelector(state=>state.user)
  if(User.currentUser!==null){
    user=true
  }
  console.log(user)
  const logouthandler=()=>{
    Logout(dispatch)
    setShowBanner(true)
  }
  
  return (   
    <Fragment>
    <header className={classes.header}>
      <div className={classes.logo}>
      <h1>Rannipuram Resort</h1>
      </div>
      <nav>
      
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/about'>
             About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/services'>
             Services
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/contact'>
             Condact
            </NavLink>
          </li>
       
        </ul> 
      </nav>

      <div>
        {!user &&
      <ul>
          <li>
            
            <NavLink activeClassName={classes.active} to='/login' onClick={show}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/register'>
             Register
            </NavLink>
          </li>
          </ul>
}
{user &&  <ul>
          <li>
            
            <NavLink activeClassName={classes.active} to='/' onClick={logouthandler}>
              LogOut
            </NavLink>
          </li>
          <li>
            
            <NavLink activeClassName={classes.active} to='/p'>
              Profile
            </NavLink>
          </li>
          </ul>}
      </div>
    </header>
    
    </Fragment>
  );
};

export default MainHeader;