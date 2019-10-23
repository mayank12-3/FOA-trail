import _apiConfig from './apiConfig';

const apiConfig = (process.env.NODE_ENV === 'development' ? _apiConfig["local"] : _apiConfig["prod"]);

export {
    apiConfig
}