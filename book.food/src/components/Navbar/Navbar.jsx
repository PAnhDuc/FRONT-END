import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("menu")

  const {getTotalCartAmount} =useContext(StoreContext);

  return (
    <div className='navbar'>
       <Link to='/'><img src={assets.logo} alt='' className='logo'/></Link>
        <ul className='navbar-menu'>
          <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
          <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
          <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile</a>
          <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
        </ul>
        <div className='navbar-right'>
          <img src={assets.search_icon} alt=''/>
          <div className='navbar-search-icon'>
           <link to='/car'><img src={assets.basket_icon}/></link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>Sig in</button>
        </div>
    </div>
  )
}

export default Navbar