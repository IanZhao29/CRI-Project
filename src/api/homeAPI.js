import axios from "axios";

const weatherURL = 'https://wthrcdn.etouch.cn/weather_mini?citykey=101230101'

export const getList = () => {
    return axios.get('http://39.107.142.175:3000/amqp', {})
}

export const changeState = () => {
    return axios.get('http://39.107.142.175:3000/switchC', {})
}

export const getState = () => {
    return axios.get('http://39.107.142.175:3000/switch', {});
}

export const getWeather = () => {
    return axios.get(weatherURL)
}

export const getUserList = () => {
    return axios.get('http://8.141.56.170:8084/userinfo/list', {})
}

export const getAirQuality = () => {
    return axios.get('https://api.waqi.info/feed/fuzhou/?token=aa50acc9ef4b0f0771dec39d2cd2007d2da88089 ')
}

export const postLoginForm = () => {
    return axios.post('http://8.141.56.170:8084/userinfo/login', {})
}
