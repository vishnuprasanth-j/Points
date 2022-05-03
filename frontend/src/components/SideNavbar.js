import {Link,useParams} from 'react-router-dom';
import React from 'react';
import './SideNavbar.scss';
import {ReactComponent as Plus} from '../assests/Pluslogo1.svg'
import {ReactComponent as Table} from '../assests/tllogo1.svg';
import {ReactComponent as Arrow} from '../assests/Arrow.svg';

const SideNav=()=>{
  const {id}=useParams()
  const[active,setactive]=React.useState(false)
  const navcollapse=()=>{
    setactive(!active)
    console.log('onclick')
  }
  return <div className='side'>
  <nav  className={`sidenav ${active? "active" :" " }`}>
  <label className={`side-menu-switch  ${active? "active-arrow" :" " }`} onClick={navcollapse}>
     
     <Arrow/>
     
  </label>
  <ul className='navcontainer'>
    <li className='navitems'>
    <Link to={`/${id}/teams`} style={{textDecoration:'inherit'}} exact><Plus/><span className='o'>Teams</span></Link>
    </li>
    <li className='navitems'>
    <Link to={`/${id}/points`} style={{textDecoration:'inherit'}}><Plus/><span className='o'>results</span></Link>
    </li>
    <li className='navitems'>
    <Link to={`/${id}/overall`} style={{textDecoration:'inherit'}}><Table/><span className='o'>Table</span></Link>
    </li>
  
  </ul>
  </nav>
    
  </div>
}
export default SideNav;