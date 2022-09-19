import React ,{useState}from 'react'
import { Cart } from './Cart';
import Navbaruser from './Navbaruser'
import { Trends } from './Trends'

export default function () {
    const[show,setShow]=useState(true);
    const[cart,setCart]=useState([]);
    const handleClick = (item) => {
        if (cart.indexOf(item) !== -1 && cart.length!==2) return;
        setCart([...cart, item]);
      };
    
      const handleChange = (item, d) => {
        const ind = cart.indexOf(item);
        const arr = cart;
        if(d===1)
           arr[ind].amount =(arr[ind].amount)+1;
        else
           arr[ind].amount =(arr[ind].amount)-1;
       
    
        if (arr[ind].amount === 0) 
           arr[ind].amount = 1;
        setCart([...arr]);
      };
  return (
    <div>
        <Navbaruser setShow={setShow} size={cart.length}/>
         {show ? (<Trends handleClick={handleClick}/>):(<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>)}
    </div>
  )
}
