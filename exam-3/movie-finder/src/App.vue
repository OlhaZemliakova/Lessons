<template>
  <div id="app">
    <v-app>
      <v-app-bar app dark padless class="pl-4">
        <img width="200" alt="logo" src="./assets/logotmdb.svg" />
      </v-app-bar>
      <v-main>
        <v-container fluid>
          <v-card-text style="text-align: start">
            <h2 class="display-3 font-weight-bold">Welcome.</h2>
            <h3 class="display-2">Millions of movies, TV shows to discover. Explore now.</h3>
          </v-card-text>
          <SearchComponent @submit="handleSearch" />
          <SearchResultsComponent
            v-if="state.results"
            :results="state.results"
          />
          <PaginationComponent
            v-if="state.total_pages > 1"
            @set-page="handlePagination"
            :currentPage="state.page"
            :totalPages="state.total_pages"
          />
        </v-container>
      </v-main>
      <FooterComponent />
    </v-app>
  </div>
</template>

<script>
import SearchComponent from "./components/SearchComponent.vue";
import api from "./api";
import SearchResultsComponent from "./components/SearchResultsComponent.vue";
import PaginationComponent from "./components/PaginationComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    SearchComponent,
    SearchResultsComponent,
    PaginationComponent,
    FooterComponent,
  },
  data: () => ({
    requestParams: {
      query: "",
      year: "",
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
  color: white;
}
.v-main {
  background-image: url("assets/bg.jpg");
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: cover;
}
</style>
