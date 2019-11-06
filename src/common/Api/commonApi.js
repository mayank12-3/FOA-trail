// import { axiosInstanse } from '../../utils/api';
import axios from 'axios';

export const contactUs = (payload = {}) => {
    debugger
    return axios.post("https://hooks.slack.com/services/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", payload, {
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded'
        } 
    })
        .then(response => response)
        .catch(error => {
            throw error;
        });
}