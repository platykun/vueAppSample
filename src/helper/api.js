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

  requestWithToken(method, url, params) {
    const token = localStorage.token;
    const fullUrl = process.env.API_URL + url;

    return axios({
      method,
      url: fullUrl,
      headers: { authorization: token },
      data: params,
    });
  },

  get(url, params) {
    return this.request('get', url, params);
  },

  getWithToken(url, params, token) {
    this.requestWithToken('post', url, params, token);
  },

  post(url, params) {
    return this.request('post', url, params);
  },

  // TODO: 将来的に外出しする.
  login(loginId, pass) {
    const apiUrl = process.env.API_URL;

    return axios.post(`${apiUrl}/user/login`, {
      loginId,
      pass,
    });
  },

  createRoom(roomName, player, boardTitle, placeName, remark) {
    const params = {
      roomName,
      player,
      boardTitle,
      placeName,
      remark,
    };
    const url = '/user/1/create_room';

    return this.requestWithToken('put', url, params);
  },
};
