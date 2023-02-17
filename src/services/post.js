import api from "./apiConfig.js";

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Token ${localStorage.getItem("knox") || null}`);
  });
};

export const createPost = async (postData) => {
  try {
    let token = await getToken();

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    };

    const response = await api.post("/posts", postData, { headers } ); 
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPosts = async () => {
    try {
      const response = await api.get("/posts")
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const getPost = async (id) => {
    try {
      const response = await api.get(`/posts/${id}`)
      return response.data
    } catch (error) {
      throw error;
    }
  };

  export const updatePost = async (postData, postID) => {
    try {
      let token = await getToken();
  
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      };
  
      const response = await api.put(`/posts/${postID}`, postData, { headers } ); 
      return response.data;
    } catch (error) {
      throw error;
    }
  };


  export const deletePost = async (id) => {
    try {
      let token = await getToken();

      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      };

      const response = await api.delete(`/posts/${id}`, { headers })
      return response.data;
    } catch (error) {
      throw error;
    }
  };