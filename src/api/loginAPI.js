import axios from "axios";

export const registerAPI = (data) => {
    console.log(data)

    return axios({
        method: 'post',
        url: 'http://8.141.56.170:8084/userinfo/register',
        data: data,
    })
}

export const loginAPI = (data) => {
    console.log(data)

    return axios({
        method: 'post',
        url: 'http://39.107.142.175:3000/userinfo/login',
        data: data,
    })
}