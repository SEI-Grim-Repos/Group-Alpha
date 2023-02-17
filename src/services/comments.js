import api from "./apiConfig.js";

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Token ${localStorage.getItem("knox") || null}`);
  });
};

export const createComment = async (commentData, postID) => {
    try {
      let token = await getToken();
  
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      };
  
      const response = await api.post(`/posts/${postID}/comments`, commentData, { headers } ); 
      return response.data;
    } catch (error) {
      throw error;
    }
  };