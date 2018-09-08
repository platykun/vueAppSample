<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <div class="flex xs12 sm6 offset-sm3">
      <v-text-field name="userId" label="ユーザID"
                    v-model="userId" v-validate="'required|max:10'"
                    :error-messages="errors.collect('userId')"></v-text-field>
      <v-text-field name="password" label="パスワード"
                    v-model="password" v-validate="'required'"
                    :error-messages="errors.collect('password')"></v-text-field>
    </div>
    <v-btn to="./index">ログイン</v-btn>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      msg: 'Welcome to login page',
      userId: '',
      password: '',
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
