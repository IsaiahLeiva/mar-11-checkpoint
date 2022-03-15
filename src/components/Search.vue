<template>
  <form action="form-group row" @submit.prevent="search">
    <input type="text" v-model="searchTerm" />
  </form>
</template>


<script>
import { postsService } from "../services/PostsService";
import { logger } from "../utils/Logger";
export default {
  setup() {
    const searchTerm = ref("");
    return {
      searchTerm,
      async search() {
        try {
          await postsService.getAll({ query: searchTerm });
        } catch (error) {
          logger.log(error);
          Pop.toast(error.message, "error");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>