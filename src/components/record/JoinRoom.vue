<template>
  <div class="index">
    <div class="flex xs12 sm6 offset-sm3">
      <v-combobox
        v-model="room"
        :items="rooms"
        label="ルーム名"
      ></v-combobox>
    </div>
    <v-btn to="./">ルームに参加</v-btn>
  </div>
</template>

<script>
export default {
  name: 'room',
  data() {
    return {
      msg: 'Welcome to JoinRoom page',
      room: '',
      rooms: [
        'aroom',
        'broom1',
        'broom2',
        'croom1',
      ],
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
