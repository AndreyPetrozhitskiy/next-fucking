import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://74.119.192.138:5000/api'
});

instance.interceptors.request.use(
    (config) => {
        const token = window.localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;