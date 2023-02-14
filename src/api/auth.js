import axios from 'axios';


const BASE_URL = "http://gourmet-gather.herokuapp.com"
const ACCESS_TOKEN = 'access_token'
const REFRESH_TOKEN = 'refresh_token'

let tokenRequest = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers:{
        'Content-Type': 'application/json',
        "accept": 'application/json'
    }
})

const logainUser = (username, password) => {
    const loginBody = {username: username, password: password}

    return tokenRequest.post(`/api/token/both/`, loginBody)
    .then((response)=> {
        window.localStorage.setItem(ACCESS_TOKEN, response.data.access);
        window.localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
        return Promise.resolve(response.data);
    }).catch((error)=>{
        return Promise.reject(error);
    }); 
}

const refreshToken = () => {
    const refreshBody = {"refresh": window.localStorage.getItem(REFRESH_TOKEN)}
return tokenRequest.post(`/api/token/access/`, refreshBody)
  .then((response)=> {
    window.localStorage.setItem(ACCESS_TOKEN, response.data.access);
    return Promise.resolve(response.data);
  }).catch((error)=>{
    return Promise.reject(error);
  });
}

const isCorrectRefreshError = (status) => {
    return status === 401;
  }
  
