/** This component is used to create post */
import { useState } from "react";
import PostForm from "./shared/PostForm";
import { createPost } from "../services/ApiService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddForm = function(){

    const [data,setData]=useState({});
    const navigate = useNavigate();

    /** This fuunction is used to create new post */
    const handleSubmitApi=async(data)=>{
        try {
            var response=await createPost(data);
            if(response?.status===201){
                setData({});
                toast.success('Post Created successfully');
                navigate('/');

            }else{
                toast.error('Error while Creating Post');
            }
        } catch (error) {
            toast.error(error)
        }
    }

    return(<>
    <h2 className="text-center">New Post</h2>
    <PostForm  handleSubmitApi={handleSubmitApi} value={data} />
    </>)
}

export default AddForm;