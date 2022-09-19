import React,{useEffect,useState} from 'react'
import { Carduser } from './Carduser'
//import list from '../data';
import '../../Styles/Trends.css';

export const Trends = ({handleClick}) => {
    const [product,setProduct]=useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:3000/posts')
        .then(res=>res.json())
        .then(res=> setProduct(res))
    })
    
  return (
    <React.Fragment>
        
    <div className="section">
        
        {
            product.map((item)=>(
                <Carduser key={item.id} item={item} handleClick={handleClick} />
            ))
        }
    </div>
    </React.Fragment>
  )
}
