/** This function is used to list the comment details for the post */
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { getPostCommentsById } from "../services/ApiService";
import CommentsForm from "./shared/CommentsForm";
import { toast } from "react-toastify";

const ViewCommments= function(){

    const [data,setData]=useState({});
    const {id}= useParams();
    /** This API call is used to get the all commends detail of the post By Id when componnent initialize */
    useEffect(()=>{
        (async()=>{
            try{
            var response= await getPostCommentsById(id);
            if(response.status===200){
                setData(response.data)
            }else{
                toast.error('Error Occur while Fetching comments');
            }
            }catch(error){
                toast.error(error);
            }

        })()
    },[id])


    return(<>
    
    <div className="container mt-5">
        <h1 className="mb-4">Comments</h1>
        
        <div className="row">
        <div className="col-7">
            {data.length >0 && data.map((item,i)=>(
            <div key={i} className="media comment-card mb-4 p-3">
                <div className="media-body">
                    <h5 className="mt-0">{item.name}</h5>
                    {item.body}
                </div>
            </div>
        ))}
        </div>

       
        <div className="col-5">
            <h4 className="mb-3">Leave a comment</h4>
           <CommentsForm />
        </div>
    </div>
    </div>

    </>)
}

export default ViewCommments;