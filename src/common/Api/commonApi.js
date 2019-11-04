import { axiosInstanse } from '../../utils/api';

export const contactUs = (payload = {}) => {
    return axiosInstanse.post("https://hooks.slack.com/services/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", payload)
        .then(response => response)
        .catch(error => {
            throw error;
        });
}