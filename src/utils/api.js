import axios from 'axios';
import { apiConfig } from './config';

export const axiosInstanse = axios.create({
    baseURL: `${apiConfig.baseUrl}${apiConfig.restApiRoot}`
});
