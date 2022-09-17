<template>
  <div>
    <v-list v-if="results?.length > 1" rounded>
      <v-list-item-group v-model="model" color="cyan" class="headline font-weight-bold">
        <v-list-item
        v-for="item in results"
        v-bind:key="item.id"
        @click="showDetails(item.id)"
      >
        {{ item.title }}
      </v-list-item>
      </v-list-item-group>
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