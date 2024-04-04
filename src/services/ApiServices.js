import axios from 'axios'
import { configVariable } from '../../sample.config';

const apiInstance = axios.create({
    baseURL: configVariable.basUrl,
});

const get = (url, queryParams, config) => {
    const response = apiInstance.get(url, queryParams, config)
    return response
}

const post = (url, payload, config) => {
    const response = apiInstance.post(url, payload, config)
    return response
}

const put = (url, payload, config) => {
    const response = apiInstance.put(url, payload, config)
    return response
}

const patch = (url, payload, config) => {
    const response = apiInstance.patch(url, payload, config)
    return response
}

const deleteRequest = (url, payload, config) => {
    const response = apiInstance.delete(url, payload, config)
    return response
}


export const apiService = {
    get,
    post,
    put,
    patch,
    deleteRequest
}