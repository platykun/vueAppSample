<template>
  <div class="record">
    Record
    <v-btn to="./create">ルーム作成</v-btn>
    <v-btn to="./join">ルーム参加</v-btn>
    <v-btn to="./result">結果入力</v-btn>
    <v-btn to="./checkin">チェックイン</v-btn>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'record',
  data() {
    return {
      msg: 'Welcome to record page',
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
