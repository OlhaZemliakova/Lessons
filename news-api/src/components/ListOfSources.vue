<template>
  <v-row>
    <v-col
      cols="12"
      v-for="item in sources"
      v-bind:key="item.id"
      lg="3"
      sm="6"
      xs="12"
    >
      <v-card variant="tonal" style="max-height: 350px; height: 100%" class="column">
        <v-card-title> {{ item.name }} </v-card-title>
        <v-card-subtitle> Category: {{ item.category }} </v-card-subtitle>
        <v-card-text> {{ item.description }} </v-card-text>
        <v-card-subtitle> Language: {{ item.language }} </v-card-subtitle>
        <v-card-actions>
          <router-link :to="'/articles/' + item.id">
            <v-btn size="small" rounded="pill">Read this source</v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import api from "../api";

export default {
  name: "ListOfSources",

  data() {
    return {
      sources: [],
    };
  },
  mounted() {
    api
      .getSources()
      .then((result) => {
        this.sources = result.data.sources;
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style>
.column {
  display: flex !important;
  flex-direction: column;
}
</style>
