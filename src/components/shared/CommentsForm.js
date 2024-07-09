/** This Form component is used to create a new comments htmlFor the post */

import {  useState } from "react";
import { validate } from "./../../services/Validation";
import * as yup from "yup";
import { createComment } from "../../services/ApiService";
import { toast } from "react-toastify";

const CommentsForm= function(){

    const [data,setData]= useState({});
    const [error,setError]= useState({});

    
    //Validation schema
    const fields=[
        {
            name:"message",validation:yup.string().required(),
        },
        {
            name:"name",validation:yup.string().required(),
        },
        {
            name:"email",validation:yup.string().email().required(),
        }
    ]

    /** This function is used to handle the onchnage event for input fields */
    const handleChange=async function(event){
        event.preventDefault();
        const { name,value }=event.target;
        setData({...data,[name]:value});
    }

    /** This function is used to handle the onchnage event for form */
    const handleSubmit=async function(event){
        event.preventDefault();
       var Error= await validate(data,fields);
       setError(Error);
       if(Object.keys(Error).length===0){
            
        try {
            var response=await createComment(data);
            if(response?.status===201){
                setData({});
                toast.success('Comment Created successfully');
            }else{
                toast.error('Error while posting comments');
            }
        } catch (error) {
            toast.error(error);
        }

       }
    }
    return(<>
             <form onSubmit={handleSubmit} id="new-comment-form">
                <div className="form-group">
                    <label htmlFor="comment-body">Message</label>
                    <textarea className="form-control"name="message" onChange={handleChange} value={data.message || ""}  rows="3"  placeholder="Write your comment"></textarea>
                    {error.message && <span className="errortext">{error.message}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="user-name">Name</label>
                    <input type="text" className="form-control"name="name" onChange={handleChange} value={data.name || ""} placeholder="Enter your name" />
                    {error.name && <span className="errortext">{error.name}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="user-email">Email</label>
                    <input type="text" className="form-control" name="email" onChange={handleChange} value={data.email || ""} placeholder="Enter your email" />
                    {error.email && <span className="errortext">{error.email}</span>}
                </div>
                <button type="submit" className="btn btn-primary my-2">Comment</button>
            </form>
    </>)
}

export default CommentsForm;