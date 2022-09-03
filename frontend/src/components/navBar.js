import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import LogoutHooks from '../Tabledashboard/Login/Logout';
import decode from 'jwt-decode';
import './navbar.scss';
import { ReactComponent as MenuLogo2 } from '../assests/menulogo2.svg'



const NavBar=({Logout,isAuthenticated})=>{
    const[isToggle,setisToggle]=React.useState(false);
    const[user,setuser]=React.useState(null)
    const navcollapse=()=>{
        setisToggle(!isToggle)
    }

   const location =useLocation()
    React.useEffect(()=>{
      console.log("location changed")
        const token = user?.token;

        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) Logout();
        }

setuser(JSON.parse(localStorage.getItem('user')))


    },[location])

    return <div >
    
   <nav className="navbar">
<div className='logo-container'> <li className='menu-items-logo' >POINTS</li></div>
  <ul className={`menu ${isToggle?"menu-items-active":""}`}>
  
  <li className='menu-items' style={{animation:`${isToggle ? `navLinkfade 0.5s ease forwards ${1/7+0.5}s`: " "}`}}>  <Link to='/'  style={{textDecoration:'inherit'}}>HOME</Link></li>
  <li  className='menu-items' style={{animation:`${isToggle ? `navLinkfade 0.5s ease forwards ${2/7+0.5}s`: " "}`}}> <Link to='/modal'    style={{textDecoration:'inherit'}} >TABLE</Link></li> 
    {user?.result?(
       
         <li className='menu-items-avatar menuitems' style={{animation:`${isToggle ? `navLinkfade 0.5s ease forwards ${2/7+0.5}s`: " "}`}}>
            <LogoutHooks setuser={setuser} Logout={Logout}/>
            </li>
  
        ) : (
            
            <li className='menu-items' style={{animation:`${isToggle ? `navLinkfade 0.5s ease forwards ${3/7+0.5}s`: " "}`}}>  <Link to='/login'    style={{textDecoration:'inherit'}} >LOGIN</Link></li> 
        )}
        </ul>
        <div className="Hamburger" onClick={navcollapse}>
          <MenuLogo2/>
        </div>           
        </nav>
        </div>
}
export default NavBar




// <Avatar alt={user?.result.name} src={user?.result.imageUrl} />



//<img src={require('./assests/logo.jpg').default}/>