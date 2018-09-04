<template>
  <div class="result">
    <h1>{{ msg }}</h1>
    Result
    <v-container fluid>
      <v-layout wrap>
        <v-flex xs12>
          <v-combobox
            v-model="select"
            :items="items"
            label="Select a favorite activity or create a new one"
            multiple
          ></v-combobox>
        </v-flex>
        <v-flex xs12>
          <v-combobox
            v-model="select"
            :items="items"
            label="I use chips"
            multiple
            chips
          ></v-combobox>
        </v-flex>
        <v-flex xs12>
          <v-combobox
            v-model="select"
            :items="items"
            label="I use a scoped slot"
            multiple
            chips
          >
            <template
              slot="selection"
              slot-scope="data"
            >
              <v-chip
                :selected="data.selected"
                :disabled="data.disabled"
                :key="JSON.stringify(data.item)"
                class="v-chip--select-multi"
                @input="data.parent.selectItem(data.item)"
              >
                <v-avatar
                  class="accent white--text"
                  v-text="data.item.slice(0, 1).toUpperCase()"
                ></v-avatar>
                {{ data.item }}
              </v-chip>
            </template>
          </v-combobox>
        </v-flex>
        <v-flex xs12>
          <v-combobox
            v-model="select"
            label="I'm readonly"
            chips
            multiple
            readonly
          ></v-combobox>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'room',
  data() {
    return {
      msg: 'Welcome to Result page',
      select: ['Vuetify', 'Programming'],
      items: [
        'Programming',
        'Design',
        'Vue',
        'Vuetify',
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
