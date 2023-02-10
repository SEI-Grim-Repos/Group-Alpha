import api from "./apiConfig.js";


export const getUsers = async () => {
    try {
        const response = await api.get('/User');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUser = async (id) => {
    try {
        const response = await api.get(`/User/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createUser = async (UserData) => {
    try {
        const response = await api.post("/User", UserData);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const updateUser = async (id, UserData) => {
    try {
        const response = await api.put(`/User/${id}`, UserData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteUser = async (id) => {
    try {
        const response = await api.delete(`/User/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};