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

  requestWithToken(method, url, params, token) {
    let promise = null;
    const fullUrl = process.env.API_URL + url;

    promise = axios({
      method: params,
      url: fullUrl,
      header: { authorization: token },
    });
    promise.catch(() => alert('エラーが発生しました'));
    return promise;
  },

  get(url, params) {
    return this.request('get', url, params);
  },

  getWithToken(url, params, token) {
    this.requestWithToken('get', url, params, token);
  },

  post(url, params) {
    return this.request('post', url, params);
  },
};
