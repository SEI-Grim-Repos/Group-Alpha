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
      const response = await api.get(`/posts/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const createPost= async (PostData) => {
    try {
      const response = await api.post("/posts", PostData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };