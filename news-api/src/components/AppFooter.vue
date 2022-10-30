<template>
  <v-footer class="text-center d-flex flex-column" theme="dark">
    <div class="pt-0">News from all over the world in one app</div>
    <v-divider></v-divider>
    <div>{{ new Date().getFullYear() }} — <strong>Vuetify</strong></div>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>
