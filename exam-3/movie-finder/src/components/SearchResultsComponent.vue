<template>
  <div>
    <ul v-if="results?.length > 1">
      <li
        v-for="item in results"
        v-bind:key="item.id"
        @click="showDetails(item.id)"
      >
        {{ item.title }}
      </li>
    </ul>
    <p v-else>Not found!</p>
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
</style>