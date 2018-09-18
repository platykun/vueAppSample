<template>
  <div class="index">
    <h1>{{ msg }}{{roomName}}</h1>
    <div class="flex xs12 sm6 offset-sm3">
      <v-text-field label="ルーム名" v-model="roomName"></v-text-field>
      <v-text-field label="プレイ人数" v-model="player"></v-text-field>
      <v-text-field label="ボードゲーム名" v-model="boardTitle"></v-text-field>
      <v-text-field label="場所名" v-model="placeName"></v-text-field>
      <v-text-field label="備考" v-model="remark"></v-text-field>
    </div>
    <v-btn @click.stop.prevent="createRoom">ルーム作成</v-btn>
  </div>
</template>

<script>
import api from '@/helper/api';

export default {
  name: 'room',
  data() {
    return {
      roomName: '',
      player: '',
      boardTitle: '',
      placeName: '',
      remark: '',
      msg: 'ルーム作成',
    };
  },
  methods: {
    createRoom() {
      api.createRoom(this.roomName, this.player, this.boardTitle, this.placeName, this.remark).then(
        (response) => {
          // eslint-disable-next-line
          console.log(response);
          this.$router.push({ path: '.' });
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          this.msg = '登録に失敗しました.';
        });
    },
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
