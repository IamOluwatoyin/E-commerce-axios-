import React from 'react'
import "./Header.css"
import { FaShoppingCart, FaHeart} from "react-icons/fa";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { RiMenuUnfold3Fill, RiMenuUnfold4Fill } 
from "react-icons/ri";
import Home from '../Pages/Home';
import { useNavigate } from 'react-router-dom';




const Header = () => {

  const navigate = useNavigate()

  const handleHome = ()=>{
    useNavigate(<Home/>)
  }


  return (
    <div className='Header-Body'>
      <header className='Header-wrapper'>
        <h3>
          T'WOMAN <span>Shop</span>
        </h3>

        <article className='right-header-side'>
          <nav>
            <ul>
              <li onClick={handleHome}>Home</li>
              <li>About</li>
              <li
               >Shop</li>
            </ul>
          </nav>

        <div className='profile-with-icon'>

            <div className='icon-with-count'>
              <FaShoppingCart style={{color:"#f1f1f1"}}/>
              <div className='icon-count'>0</div>
           </div>

            <div className='icon-with-count'>
              <FaHeart className='icon' />
              <div className='icon-count'>0</div>
           </div>
        
           <FaSearch className='icon' />

         <FaUserCircle className='icon profile' />
       </div>
     </article>
  </header>
      
    </div>
  )
}

export default Header;
