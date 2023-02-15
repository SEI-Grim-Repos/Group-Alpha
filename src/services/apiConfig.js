import axios from 'axios'

// const api = axios.create({
//     baseURL: process.env.NODE_ENV === 'production'
//         ? 'https://gourmet-gather.herokuapp.com'
//         : 'http://localhost:4000'
// })

const api = axios.create({
    baseURL: 'https://gg1114.herokuapp.com'
})


export default api;