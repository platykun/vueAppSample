<template>
  <v-footer>Design by hoge. {{msg}}</v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      msg: 'This is footer',
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
