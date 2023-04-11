import axios from 'axios';

const URI = process.env.REACT_APP_API_URL;

const api = axios.create({
	baseURL: URI,
});

export default api;
