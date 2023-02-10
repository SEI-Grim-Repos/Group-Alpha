// Imports
import api from "./apiConfig.js";


export const getPost = async () => {
  try {
    const response = await api.get("/posts");
    return response.data;
  } catch (error) {
    throw error;
  }
};

