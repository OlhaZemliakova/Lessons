<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="12" md="12" lg="12">
        <v-text-field class="input"
        v-model="form.query"
          label="Search movie"
          placeholder="Search movie..."
          outlined
          rounded
          solo
        ></v-text-field>
        <v-btn
        @click="submit"
        accent
        elevation="7"
        x-large
        rounded
        color="cyan"
        class="white--text ml-5"
        >Search</v-btn
      >
      </v-col>
      <v-col class="d-flex" cols="12" sm="12" md="6" lg="3">
        <v-select
          v-model="form.year"
          :items="year"
          label="Year"
          solo
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="12" md="6" lg="3">
        <v-select
          v-model="form.genre"
          :items="genre"
          label="Genre"
          solo
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="12" md="6" lg="3">
        <v-select
          v-model="form.rating"
          :items="rating"
          label="Rating"
          solo
        ></v-select>
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
    year: [
      "2022",
      "2021",
      "2020",
      "2019",
      "2018",
      "2017",
      "2016",
      "2015",
      "2014",
      "2013",
    ],
    genre: ["comedy", "drama", "action", "thriller"],
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
  .input {
    opacity: 0.8;
  }
</style>
