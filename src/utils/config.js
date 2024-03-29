import _apiConfig from './apiConfig';

const apiConfig = (process.env.NODE_ENV === 'production' ? _apiConfig["prod"] : _apiConfig["local"]);

export {
    apiConfig
}