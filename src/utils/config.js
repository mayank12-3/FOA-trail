import _apiConfig from './apiConfig';

const apiConfig = (process.env.NODE_ENV === 'production' ? _apiConfig["production"] : _apiConfig["development"]);

export {
    apiConfig
}
