import axios from 'axios';
import { apiConfig } from './config';

export const axiosInstance = axios.create({
    baseURL: `${apiConfig.baseUrl}${apiConfig.restApiRoot}`
});
