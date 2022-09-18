<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" lg="8" sm="8">
        <v-text-field
          class="input"
          v-model="form.query"
          label="Search movie"
          placeholder="Enter the title of the movie"
          outlined
          solo-inverted
          dark
          rounded
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="2" sm="2">
        <v-select
          v-model="form.year"
          :items="year"
          label="Year"
          solo
          rounded
          solo-inverted
          dark
        ></v-select>
      </v-col>
      <v-col cols="12" lg="2" sm="2">
        <v-btn
          @click="submit"
          accent
          elevation="7"
          large
          rounded
          color="cyan"
          class="white--text"
          >Search</v-btn
        >
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
      { text: "year", value: "" },
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
      "2012",
      "2011",
      "2010",
      "2009",
      "2008",
      "2007",
      "2006",
      "2005",
      "2003",
      "2002",
      "2001",
      "2000",
    ],
    form: {
      query: "",
      year: "",
    },
  }),
  methods: {
    submit() {
      console.log("submit");
      this.$emit("submit", {
        query: this.form.query,
        year: this.form.year,
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
