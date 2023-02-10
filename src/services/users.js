import api from "./apiConfig.js";


export const getUsers = async () => {
    try{
    const response = await api.get('/Users');
    return response.data;
} catch (error) {
    throw error;
}
};

export const getUser = async (id) => {
try {
const response = await api.get(`/Users/${id}`);
return response.data;
} catch (error){
    throw error;
}
};