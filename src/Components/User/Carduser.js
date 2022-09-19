import React from 'react';
import  '../../Styles/button.css';

export const Carduser = ({ item, handleClick }) => {
    const {title,description,price,image,id}=item;
  return (
    <div>
    <div className="cards">
       <div className="image_box">
        <img src={image} alt="" />
      </div> 
      <div className="details">
        <p>{title}</p>
        <p>{description}</p>
        <p>Price - {price}Rs</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
    </div>
  )
}
