/** This Home component is used to list all the post content in the application */

import { useEffect, useState } from "react";
import {deletePost, getAlPosts } from "./../services/ApiService";
import editIcon from '../assets/icons/edit-icon.svg';
import deleteIcon from '../assets/icons/delete-icon.svg';
import CommentIcon from '../assets/icons/comments-icon.svg';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

const Home = function(){

    const [post,setPost]= useState([]);

    /** To get the Post Details when component Intialize */
    useEffect(()=>{
      (async()=>{
       try {
        var response= await getAlPosts().then();
        if(response?.status===200){
            setPost(response.data);
        }else{
            toast.error('Error While Fetching Data');
        }
       } catch (error) {
        toast.error(error.message)
       }
      })()

    },[]);

    /** This function is used to delete the Post By Id */
const handleDelete=async (id)=>{
    try {
        var response= await deletePost(id).then();
        if(response?.status===200){
            alert('Post Deleted successfuly');
        }else{
            alert('Error While deleting Data');
        }
    } catch (error) {
        alert(error);
    }
}

return(
        <div className="row">
            {post.length>0 && post.map((item,i)=>(
                <div key={i} className="col-12 mb-4">
                <div  className="card">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.body}</p>
                       <Link to={'edit-form/'+item?.id}><img src={editIcon} width={40} alt="editicon" /></Link>
                       <Link onClick={()=>handleDelete(item.id)}><img src={deleteIcon} width={35} alt="editicon" /></Link>
                       <Link  to={'post/'+item?.id}><img src={CommentIcon} width={35} alt="editicon" /></Link>
                    </div>
                </div>
            </div>
            ))}
        </div>
)
}

export default Home;