import request from "../util/request";
import axios from "axios";

const weatherURL = 'http://wthrcdn.etouch.cn/weather_mini?citykey=101230101'

export const getList = (method,url,params) => {
    return request({
        method,
        url,
        params
    })
}

export const getWeather = () => {
    return axios.get(weatherURL)
}

export const getAirQuality = () => {
    return axios.get('https://api.waqi.info/feed/fuzhou/?token=aa50acc9ef4b0f0771dec39d2cd2007d2da88089 ')
}