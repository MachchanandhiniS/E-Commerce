import React from 'react';
import { Link } from 'react-router-dom';

export default function ViewProductDetails(props) {
  const items = JSON.parse(localStorage.getItem('data'));
  return (
    <div>
      <Link className="btn btn-success" to='/'>Back</Link>
      <div className='d-flex justify-content-center'>
        <h4>{items.title}</h4>
      </div>
      <div className='d-flex justify-content-center'>
        <img src={items.image} /></div>
      <div className='d-flex justify-content-center'>
        <h5>{items.price}</h5></div>
      <div className='d-flex justify-content-center'>
        <p>{items.description}</p></div>
    </div>
  )
}
