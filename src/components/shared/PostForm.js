/** This resuable component is used to create or edit the post details */

import { useEffect, useState } from "react";
import { validate } from "./../../services/Validation";
import * as yup from "yup";

const PostForm= function({value,handleSubmitApi}){

    const [data,setData]= useState({});
    const [error,setError]= useState({});

    useEffect(()=>{
        setData(value)
    },[value]);
    
    //Validation schema
    const fields=[
        {
            name:"body",validation:yup.string().required(),
        },{
            name:"title",validation:yup.string().required(),
        }
    ]

    /** This function is used to handle the onchnage event for input fields */
    const handleChange=async function(event){
        event.preventDefault();
        const { name,value }=event.target;
        setData({...data,[name]:value});
        // var Error= await validate({...data,[name]:value},fields);
        // setError(Error);
    }

    /** This function is used to handle the onchnage event for form */
    const handleSubmit=async function(event){
        event.preventDefault();
       var Error= await validate(data,fields);
       setError(Error);
       if(Object.keys(Error).length===0){
            handleSubmitApi(data);
       }
    }

    return(<>
      <form onSubmit={handleSubmit}>
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row d-flex justify-content-center">
            <div className="col-12">
                <label className="form-label">Title</label>
                <input
                type="text"
                name="title"
                onChange={handleChange}
                value={data.title || ""}
                className="form-control"
                placeholder="Enter the Title"
                />
                {error.title && <span className="errortext">{error.title}</span>}
            </div>
            <div className="col-12 my-2">
                <label className="form-label">Body</label>
                <textarea
                className="form-control"
                rows="3"
                name="body"
                value={data.body || ""}
                onChange={handleChange}
                placeholder="Enter the Body"
                ></textarea>
                {error.body && <span className="errortext">{error.body}</span>}
            </div>
            <div className="col-12 d-flex justify-content-center">
                <button type="submit" className="btn btn-success text-center">
                Submit
                </button>
            </div>
            </div>
        </div>
        </form>

    </>)
}

export default PostForm;
