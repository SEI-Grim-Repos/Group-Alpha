import api from "./apiConfig.js";

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Token ${localStorage.getItem("knox") || null}`);
  });
};

export const getUser = async () => {
  try {
    let token = await getToken();

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    };

    const response = await api.get("/user/profile", { headers }); 
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await api.post("/user/signup", userData);
    localStorage.setItem("knox", response.data["token"]); 
    return response.data["token"];
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await api.post("/user/login", userData);
    localStorage.setItem("knox", response.data["token"]); 
    return response.data["token"];
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    localStorage.removeItem("knox");
    return true;
  } catch (error) {
    throw error;
  }
};

export const changeUserInfo = async (userData, profile_id) => {
  try {
    let token = await getToken();

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    };

    const response = await api.put(`/user/profile/${profile_id}`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};