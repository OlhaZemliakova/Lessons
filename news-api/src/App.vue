<template>
  <v-app>
    <v-app-bar theme="dark">
      <router-link :to="'/'">
        <h1 class="logo" style="color: white">News</h1>
      </router-link>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppFooter,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.logo {
  margin-left: 40px;
}

a {
  text-decoration: none;
  color: black;
}
</style>
