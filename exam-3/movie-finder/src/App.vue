<template>
  <div id="app">
    <v-app>
      <v-container fluid>
        <img width="100" alt="Vue logo" src="./assets/logotmdb.svg" />
        <SearchComponent @submit="handleSearch" />
        <SearchResultsComponent v-if="state.results" :results="state.results" />
        <PaginationComponent
          v-if="state.total_pages > 1"
          @set-page="handlePagination"
          :currentPage="state.page"
          :totalPages="state.total_pages"
        />
      </v-container>
    </v-app>
  </div>
</template>

<script>
import SearchComponent from "./components/SearchComponent.vue";
import api from "./api";
import SearchResultsComponent from "./components/SearchResultsComponent.vue";
import PaginationComponent from "./components/PaginationComponent.vue";

export default {
  name: "App",
  components: {
    SearchComponent,
    SearchResultsComponent,
    PaginationComponent,
  },
  data: () => ({
    requestParams: {
      query: "",
      year: "",
      genre: "",
      rating: "",
      page: 1,
    },
    state: {},
  }),
  methods: {
    loadData() {
      api
        .getResults(this.requestParams)
        .then((response) => {
          console.log(response);
          this.state = response.data;
        })
        .catch((error) => {
          alert(error.response.data.errors[0]);
        });
    },
    handleSearch(params) {
      console.log(params);

      this.requestParams = { ...this.requestParams, ...params };
      this.loadData();
    },
    handlePagination(page) {
      console.log(page);
      this.requestParams = { ...this.requestParams, page: page };
      this.loadData();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
