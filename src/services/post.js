// Imports
import api from "./apiConfig.js";


export const getPosts = async () => {
  try {
    const response = await api.get("/post");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPost= async (id) => {
    try {
      const response = await api.get(`/post/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const createPost= async (PostData) => {
    try {
      const response = await api.post("/post", PostData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const updatePost = async (id, PostData) => {
    try {
      const response = await api.put(`/post/${id}`, PostData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const deletePost = async (id) => {
    try {
      const response = await api.delete(`/post/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };