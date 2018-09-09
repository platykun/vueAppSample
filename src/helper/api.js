/* eslint-disable no-alert */
import axios from 'axios';

export default {

  request(method, url, params) {
    let promise = null;
    const fullUrl = process.env.API_URL + url;

    if (method === 'get') {
      promise = axios.get(fullUrl, { params });
    } else if (method === 'post') {
      promise = axios.post(fullUrl, params);
    }
    promise.catch(() => alert('エラーが発生しました'));
    return promise;
  },

  get(url, params) {
    return this.request('get', url, params);
  },

  post(url, params) {
    return this.request('post', url, params);
  },
};
