// Imports
import api from "./apiConfig.js";

export const getPosts = async () => {
    try {
        const response = await api.get("/Post/");
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getPost= async (id) => {
    try {
        const response = await api.get(`/Post/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createPost= async (PostData) => {
    try {
        const response = await api.post("/Post/", PostData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updatePost = async (id, PostData) => {
    try {
        const response = await api.put(`/Post/${id}`, PostData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deletePost = async (id) => {
    try {
        const response = await api.delete(`/Post/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};