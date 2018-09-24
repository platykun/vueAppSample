<template>
  <div class="record">
    RecordTop
    <div class="flex xs12 sm6 offset-sm3">
      <h2>参加中ルーム情報</h2>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="indigo">dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-sub-title>ボードゲーム名</v-list-tile-sub-title>
            <v-list-tile-title>モノポリー</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon>edit</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="indigo">people</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-sub-title>参加人数</v-list-tile-sub-title>
            <v-list-tile-title>1人/2人</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon>person_add</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider inset></v-divider>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="indigo">map</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-sub-title>チェックイン中</v-list-tile-sub-title>
            <v-list-tile-title>なんとかボドゲカフェ</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon>place</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </div>
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
