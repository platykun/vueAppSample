<template>
  <div class="index">
    <div class="flex xs12 sm6 offset-sm3">
      <v-combobox
        v-model="room"
        :items="rooms"
        label="ルーム名"
      ></v-combobox>
    </div>
    <v-btn to=".">ルームに参加</v-btn>
    <p>{{$data}}</p>
  </div>
</template>

<script>
import api from '@/helper/api';

export default {
  name: 'room',
  data() {
    return {
      msg: 'Welcome to JoinRoom page',
      room: '',
      rooms: [],
    };
  },
  beforeCreate() {
    const self = this;
    api.get('room/find_all/0').then(
      (response) => {
        self.rooms = Object.keys(response.data.result)
          .map(key => response.data.result[key].roomName);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
