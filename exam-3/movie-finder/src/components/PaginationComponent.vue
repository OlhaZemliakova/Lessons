<template>
  <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              :value="currentPage"
              class="my-4"
              :length="totalPages"
              circle
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right"
              @input="handlePageChange"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "PaginationComponent",
  emit: ['set-page'],
  props: ['currentPage', 'totalPages'],
  methods: {
    handlePageChange(value) {
      this.$emit("set-page", value);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>