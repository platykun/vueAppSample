import api from '@/helper/api';

/* eslint-disable-next-line */
export default class Detail {

  static getDetail() {
    const url = '/user/status';
    return api.requestWithToken('get', url);
  }
}
