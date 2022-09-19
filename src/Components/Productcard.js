import React from 'react';
import { Link } from 'react-router-dom';
import { DeleteProduct } from '../Service/ApiServices';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import '../Styles/Homepage.css';


export default function Productcard(props) {
    const id=props.id;
    console.log(id);
    const handleOnClickDetails = async () => {
        localStorage.setItem("data", JSON.stringify(props));
    }
    const handleOnClickDelete = async()=>{
        try{
            if(window.confirm('Are you sure you want to delete?')){
                const res = await DeleteProduct(id);
                toast('Deleted Sucessfully');
                window.location.reload(true);
            }
        }catch(error){
            console.log("delete error: ",error);
            alert("Could Not Delete Try Again");
        }
        
    }
    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card p-0 overflow-hidden h-100 shadow" >
                <img class="card-img-top img-fluid" src={props.image} />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.price}</p>


                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-6">

                        <Link to="/" className="btn btn-danger" onClick={() => handleOnClickDelete()}>Remove</Link>

                        </div>
                        <div class="col-12 col-sm-6 col-md-6">
                            <Link to="ViewProductDetails" className="btn btn-success" onClick={() => handleOnClickDetails()}>Details</Link>

                        </div>
                        
                    </div>


                </div>
            </div>
            <ToastContainer toastStyle={{ backgroundColor: "crimson" }} />
        </div>
    )
}
