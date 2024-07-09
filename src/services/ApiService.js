/*** Api service contains all the API's used for the application */

import axios from "axios";

// Create an Axios instance with base settings
const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

/** This Api End point is used tp get all the post details */
export const getAlPosts = async () => {
   
    return axiosInstance.get(`/posts`)
		  .then(function (response) {
			return response;
		  })
		  .catch(function (error) {
			return error.response;
		  });
  };

  /** This Api End point is used to insert post */
export const createPost = async (payload) => {
   
    return axiosInstance.post(`/posts`,payload)
		  .then(function (response) {
			return response;
		  })
		  .catch(function (error) {
			return error.response;
		  });
  };

    /** This Api End point is used to update post */
export const updatePost = async (id,payload) => {
   
    return axiosInstance.put(`/posts/${id}`,payload)
		  .then(function (response) {
			return response;
		  })
		  .catch(function (error) {
			return error.response;
		  });
  };

  /** This Api End point is used to get post detail by Id */
export const getPostById = async (id) => {
   
    return axiosInstance.get(`/posts/${id}`)
		  .then(function (response) {
			return response;
		  })
		  .catch(function (error) {
			return error.response;
		  });
  };

  /** This Api End point is used to delete post detail by Id */
export const deletePost = async (id) => {
   
    return axiosInstance.delete(`/posts/${id}`)
		  .then(function (response) {
			return response;
		  })
		  .catch(function (error) {
			return error.response;
		  });
  };

  /** This Api End point is used to get post commends detail by Id */
export const getPostCommentsById = async (id) => {
   
    return axiosInstance.get(`/comments?postId=${id}`)
		  .then(function (response) {
			return response;
		  })
		  .catch(function (error) {
			return error.response;
		  });
  };

    /** This Api End point is used to insert comment */
export const createComment = async (payload) => {
   
    return axiosInstance.post(`/comments`,payload)
		  .then(function (response) {
			return response;
		  })
		  .catch(function (error) {
			return error.response;
		  });
  };