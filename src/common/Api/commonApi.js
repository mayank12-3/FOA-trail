import { axiosInstance } from '../../utils/api';
// import axios from 'axios';

export const contactUs = (payload = {}) => {
    console.log('payload-->', payload)
    return axiosInstance.post('/submitResponse', payload, {
        headers : {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response)
    .catch(error => {
        throw error;
    });
}
