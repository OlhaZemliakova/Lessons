<template>
  <v-card>
    <v-card-title class="text-h5 grey lighten-2">
      {{ details.title }}
    </v-card-title>
    <img :src="'https://image.tmdb.org/t/p/original' + details.poster_path" alt="poster" style='width: 100%'/>
    <v-card-text>
      {{ details.overview }}
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="cyan" text @click="close"> Close </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "DetailsComponent",
  props: ["details"],
  emits: ["close"],
  methods: {
    close() {
      this.$emit("close", true);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>