import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://auth-c0afe.firebaseio.com/'
});

export default instance;