import api from '@/helper/api';

/* eslint-disable-next-line */
export default class JoinRoom {
  constructor(room) {
    this.room = room;
  }

  findRoom() {
    const url = `/room/find/${this.room}`;

    return api.requestWithToken('get', url);
  }
}
