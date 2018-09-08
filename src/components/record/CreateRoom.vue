<template>
  <div class="index">
    <h1>{{ msg }}{{roomName}}</h1>
    <div class="flex xs12 sm6 offset-sm3">
      <v-text-field label="ルーム名" v-model="roomName"></v-text-field>
      <v-text-field label="ボードゲーム名" v-model="boardGameName"></v-text-field>
      <v-text-field label="プレイ人数" v-model="player"></v-text-field>
      <v-text-field label="備考" v-model="remarks"></v-text-field>
    </div>
    <v-btn to="./">ルーム作成</v-btn>
  </div>
</template>

<script>
export default {
  name: 'room',
  data() {
    return {
      roomName: '',
      player: '',
      boardGameName: '',
      remarks: '',
      msg: 'ルーム作成',
    };
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
