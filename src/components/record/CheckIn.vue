<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    {{$data}}
    <v-text-field label="場所名検索" v-model="place"></v-text-field>
    <v-list subheader>
      <v-subheader>検索結果</v-subheader>

      <v-list-tile
        v-for="onePlace in places"
        :key="onePlace"
        @click="checkin(onePlace.name)">
        <v-list-tile-content @click="notifications = !notifications">
          <v-list-tile-title v-text="onePlace.name"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
import Place from '@/domain/room/Place';

export default {
  name: 'room',
  data() {
    return {
      msg: 'Welcome to Checkin page',
      place: '',
      places: null,
      notifications: null,
    };
  },
  beforeCreate() {
    Place.findAllPlace().then(
      (response) => {
        // eslint-disable-next-line
        console.log(response.data.result);
        this.places = response.data.result;
      });
  },
  methods: {
    checkin(val) {
      Place.checkIn(val);
      this.$router.push({ path: './top' });
    },
  },
  watch: {
    place(val) {
      Place.findPlace(val).then(
        (response) => {
          this.places = response.data.result;
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
