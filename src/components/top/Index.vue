<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    hello
    <v-btn to="./record/top">記録する</v-btn>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      msg: 'Welcome to index page',
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
