import { axiosInstance } from '../../utils/api';
// import axios from 'axios';

export const contactUs = (payload = {}) => {
    return axiosInstance.post('/submitResponse', payload, {
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response)
    .catch(error => {
        throw error;
    });
}
