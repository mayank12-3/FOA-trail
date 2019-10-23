import { axiosInstanse } from '../../../utils/api';

export const getQuestions = () => {
    return axiosInstanse.get('/customItinerary')
        .then(resp => resp)
        .catch(error => {
            throw error;
        });
}