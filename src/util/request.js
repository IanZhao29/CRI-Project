import axios from "axios";

const requset = axios.create({
    baseURL: 'http://8.141.56.170:8083/',
})

export default requset