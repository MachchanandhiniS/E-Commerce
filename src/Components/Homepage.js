import React, { useState,useEffect } from 'react';
import { getProductDetails } from '../Service/ApiServices';
import Productcard from './Productcard';
import Navbar from './Navbar';


export default function Homepage() {

  const [displayProduct,setDisplayProduct] =useState([]);
  const [title,setTitle]=useState([]);

  const getProductData =async()=>{
    const res= await getProductDetails();
    setDisplayProduct(res.data);
  }

  useEffect(()=>{
    getProductData();
  },[])

  return (
    <>
     <Navbar></Navbar>
      <h1 className='text-center mt-3'>Available Products</h1>
      <input placeholder='Enter product to search' value={title} onChange={item=>setTitle(item.target.value)}></input>
      <section className='py-4 container'>
        <div className='row justify-content-center'>
          { 
            displayProduct.map((item) => {
              return (
                <>
                {/* {item.title ? item.title:""} */}
                <Productcard key={item.id}  id={item.id} image={item.image} description={item.description} title={item.title} price={item.price} />
                </> 
              )
            })
          }


        </div>
      </section>
    </>
  )
}
