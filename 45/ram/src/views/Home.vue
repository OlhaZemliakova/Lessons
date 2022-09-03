<template>
  <div class="home">
    <h1>{{ persons }}</h1>
    <b-button variant="success" @click="getPersons">Button</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import TestView from "@/components/TestView.vue";
// import Wrapper from "@/components/Wrapper.vue";

export default {
  name: "Home",
  components: {
    // TestView,
    // Wrapper,
  },
  data() {
    return {
      persons: {},
    };
  },
  methods: {
    getPersons() {
      this.axios
        .get("https://rickandmortyapi.com/api/character")
        .then((resp) => {
          this.persons = resp;
        });
    },
  },
};
</script>
