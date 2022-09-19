import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import '../Styles/AddProductCss.css';
import * as ApiService from '../Service/ApiServices';
import Navbar from './Navbar'; 

const onHandleSubmit= async(value)=>{
    await ApiService.addProduct(value);
    toast(`${value.title} Successfully Added`);
}
const validate = values => {
    const errors = {};
    if (!values.title) {
        errors.title = "*Required";
    } else if (values.title.length <= 4) {
        errors.title = "*Must be 4 characters";
    }
    if (!values.price) {
        errors.price = "*Required";
    }
    if (!values.description) {
        errors.description = "*Required";
    }
    if (!values.image) {
        errors.image = "*Required";
    }
    if (!values.category) {
        errors.category = "*Required";
    }

    return errors;
}
export default function AddProduct() {
    const formik = useFormik({
        initialValues: {
            title: '',
            price: '',
            description: '',
            image: '',
            category: '',
        },
        validate,
        onSubmit: values => {
            //toast(`${values.title} Successfully Added`);
            //localStorage.setItem("addproducts", JSON.stringify(values));
            onHandleSubmit(values);
            
        }
    });
    console.log(formik.values);
    return (
        <div>
             <Navbar></Navbar>
           <div className='bgcolor'>
              <div className="container">
                <Link className="btn btn-success" to='/'>Back</Link> 
                    <h1>Add Product </h1>
                    <form onSubmit={formik.handleSubmit}>

                        <input input="text" placeholder='Title' name='title' value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur} required />
                        {
                            formik.touched.title && formik.errors.title ? <span>{
                                formik.errors.title}</span> : null

                        }<br />

                        <input input="number" placeholder='Price' name='price' value={formik.values.price} onChange={formik.handleChange} onBlur={formik.handleBlur} required />
                        {
                            formik.touched.price && formik.errors.price ? <span>{
                                formik.errors.price}</span> : null

                        }<br />

                        <textarea placeholder='Description' name='description' value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur} required />
                        {
                            formik.touched.description && formik.errors.description ? <span>{
                                formik.errors.description}</span> : null

                        }<br />
                        <input input="text" placeholder='Image' name='image' value={formik.values.image} onChange={formik.handleChange} onBlur={formik.handleBlur} required />
                        {
                            formik.touched.image && formik.errors.image ? <span>{
                                formik.errors.image}</span> : null

                        }<br />
                        <input list="select"
                            name="category"
                            placeholder='Category'
                            onChange={formik.handleChange}
                            value={formik.values.category}
                            className="form-control"
                        />
                        <datalist id="select">
                            <option value="Menswear">Menswear</option>
                            <option value="Kidswear">Kidswear</option>
                            <option value="Stationaries">Stationaries</option>
                            <option value="Shows">Shows</option>
                            <option value="Bags">Bags</option>
                            <option value="Womenswear">Womens wear</option>
                        </datalist>
                        {
                            formik.touched.category && formik.errors.category ? <span>{
                                formik.errors.category}</span> : null

                        }
                        <br></br>
                        <input type="submit" value="Submit" />
                        <ToastContainer></ToastContainer>
                    </form>

                </div>
            </div>
        </div>
    )
}