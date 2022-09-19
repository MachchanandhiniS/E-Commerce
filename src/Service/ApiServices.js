import React from 'react'
import axios from 'axios';

export const addProduct= async (values)=>{
  
    const addProducts= await axios({
       method: 'post',
       url: 'http://localhost:3000/posts',
       data: values,
       
     });
     console.log(addProducts);
     return addProducts;
     
 }
 
 export const getProductDetails = async () => {
  
    const data = await axios({
     method:'get',
      url:'http://localhost:3000/posts',}
    );
    console.log(data.data);
    return data;
 
};

export const DeleteProduct = async(id)=>{
    const res = await axios({
        method:'delete',
        url:`http://localhost:3000/posts/${id}`,
       
     
    });
    console.log(res.data);
    return res;
}

