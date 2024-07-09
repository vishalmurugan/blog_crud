/** This component is used to Edit post */
import { useEffect, useState } from "react";
import PostForm from "./shared/PostForm";
import { updatePost,getPostById } from "../services/ApiService";
import {  useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';

const EditForm = function(){

    const [data,setData]=useState({});
    const {id}= useParams();
    const navigate=useNavigate();

    /** This API call is used to get the Post detail By Id when componnent initialize */
    useEffect(()=>{
        (async()=>{
            try{
            var response= await getPostById(id);
            if(response.status===200){
                setData(response.data)
            }else{
                toast.error('Error Occur while Fetching data');
            }
            }catch(error){
                toast.error(error);
            }

        })()
    },[id])

    /** This fuunction is used to create new post */
    const handleSubmitApi=async(data)=>{
        try {
            data.id=id;
            var response=await updatePost(id,data);
            if(response.status===200){
                toast.success('Post Updated successfully');
                navigate('/');
            }else{
                toast.error('Error while Updating Post');
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(<>
    <h2 className="text-center">Edit Post</h2>
    <PostForm  handleSubmitApi={handleSubmitApi} value={data} />
    </>)
}

export default EditForm;