<template>
  <div>
    <v-list three-line v-if="results?.length > 1">
      <v-list-item
        v-for="item in results"
        v-bind:key="item.id"
        @click="showDetails(item.id)"
        class="mb-8"
      >
        <v-img
          :src="
            'https://image.tmdb.org/t/p/w94_and_h141_bestv2' + item.poster_path
          "
          alt="poster"
          max-width="94"
          class="mr-4"
        >
        </v-img>
        <v-list-item-content class="text-left">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.release_date }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <p v-else class="error">Not found!</p>
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <DetailsComponent @close="dialog = false" :details="details" />
      </v-dialog>
    </div>
  </div>
</template>

<script>
import DetailsComponent from "./DetailsComponent.vue";
import api from "../api";

export default {
  name: "SearchResultsComponent",
  props: ["results"],
  components: {
    DetailsComponent,
  },
  data: () => ({
    dialog: false,
    details: {},
  }),
  methods: {
    showDetails(id) {
      console.log(id);
      this.loadData(id);
    },
    loadData(id) {
      api.getDetails(id).then((response) => {
        console.log(response);
        this.details = response.data;
        this.dialog = true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.v-list {
  opacity: 0.8;
}
</style>