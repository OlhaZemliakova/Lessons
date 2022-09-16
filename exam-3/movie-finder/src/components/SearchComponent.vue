<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-text-field v-model="form.query" label="Search movie"></v-text-field>
        <v-select
          v-model="form.year"
          :items="year"
          label="Year"
          solo
        ></v-select>
        <v-select
          v-model="form.genre"
          :items="genre"
          label="Genre"
          solo
        ></v-select>
        <v-select
          v-model="form.rating"
          :items="rating"
          label="Rating"
          solo
        ></v-select>
        <v-btn @click="submit" accent elevation="2" small rounded>Search</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SearchComponent",
  emits: {
    submit: null,
  },
  data: () => ({
    year: ["2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015"],
    genre: ['12', "comedy", "drama", "action"],
    rating: ["asc", "desc"],
    form: {
      query: "",
      year: "",
      genre: "",
      rating: "",
    },
  }),
  methods: {
    submit() {
      console.log("submit");
      this.$emit("submit", {
        query: this.form.query,
        year: this.form.year,
        genre: this.form.genre,
        rating: this.form.rating,
      });
    },
  },
};
</script>

<style>
</style>
