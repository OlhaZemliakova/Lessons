<template>
  <v-container>
    <v-card v-for="item in articles" v-bind:key="item.id" class="mb-4 pa-2">
      <v-row
        class="flex-xs-column-reverse flex-sm-column-reverse flex-lg-row flex-md-row"
      >
        <v-col md="8" sm="12">
          <v-card-title> {{ item.title }} </v-card-title>
          <v-card-text> {{ item.description }} </v-card-text>
          <v-row>
            <v-col md="6" sm="12" xs="12">
              <v-card-subtitle>
                published: {{ item.publishedAt }}
              </v-card-subtitle>
            </v-col>
            <v-col md="6" sm="12" xs="12">
              <v-card-subtitle> author: {{ item.author }} </v-card-subtitle>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="4" sm="12">
          <v-img :src="item.urlToImage"></v-img>
        </v-col>
      </v-row>
      <action-card class="align-content-end">
        <v-btn size="small" rounded="pill">
          <a :href="item.url" target="_blank">read more...</a>
        </v-btn>
      </action-card>
    </v-card>
  </v-container>
</template>

<script>
import api from "../api";

export default {
  name: "ListOfSources",
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    api
      .getArticles(this.$route.params.id)
      .then((result) => {
        this.articles = result.data.articles;
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
