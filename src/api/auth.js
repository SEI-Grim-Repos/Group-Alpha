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
  

  const authRequest = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
      'Authorization': `Bearer ${window.localStorage.getItem(ACCESS_TOKEN)}`,
      'Content-Type': 'application/json',
    }
});
authRequest.interceptors.response.use(
  (response) => response, 
  (error) => { 
    return errorInterceptor(error)
  }
);

const errorInterceptor = (error) => {
  const originalRequest = error.config;
  const status = error.response.status;
  if (isCorrectRefreshError(status)) {
    return refreshToken().then((data)=> {
      const headerAuthorization = `Bearer ${window.localStorage.getItem(ACCESS_TOKEN)}`;
      authRequest.defaults.headers['Authorization'] = headerAuthorization;
      originalRequest.headers['Authorization'] = headerAuthorization;
      return authRequest(originalRequest)
    }).catch((error)=> {

      logoutUser();
      return Promise.reject(error)
    })
  }
  return Promise.reject(error)
}

const logoutUser = () => {
  window.localStorage.removeItem(ACCESS_TOKEN);
  window.localStorage.removeItem(REFRESH_TOKEN);
  authRequest.defaults.headers['Authorization'] = "";
}

export { tokenRequest, loginUser, logoutUser, refreshToken, authRequest,
         errorInterceptor, BASE_URL, ACCESS_TOKEN, REFRESH_TOKEN }
