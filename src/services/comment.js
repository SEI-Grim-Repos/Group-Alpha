import api from "./apiConfig.js";

export const getComments = async () => {
    try{
    const response = await api.get('/Comment');
    return response.data;
} catch (error) {
    throw error;
}
};

export const getComment = async (id) => {
try {
const response = await api.get(`/Comment/${id}`);
return response.data;
} catch (error){
    throw error;
}
};

export const createComment = async (CommentData) => {
try{
    const response = await api.post("/Comment/", CommentData);
    return response.data;
} catch (error){
    throw error;
}
};


export const updateComment = async (id, CommentData) => {
try {
    const response = await api.put(`/Comment/${id}`, CommentData);
    return response.data;
}catch (error){
    throw error;
}
};

export const deleteComment = async (id) => {
    try {
      const response = await api.delete(`/Comment/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };