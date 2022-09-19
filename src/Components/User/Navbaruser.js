import React from 'react';
import '../../Styles/Navbaruser.css';

function Navbaruser({setShow,size}) {
  return (
    <nav>
        <div className='nav_box'>
        <span className='my_shop' onClick={()=>setShow(true)}>Trends</span>
        <div className="cart" onClick={()=>setShow(false)}>
            <span>
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </span>
            <span>{size}</span>
        </div>
        </div>
    </nav>
  )
}

export default Navbaruser
