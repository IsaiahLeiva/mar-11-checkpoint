<template>
  <div class="container-fluid">
    <div class="row justify-content-end">
      <div class="col-3">
        <div class="profile-section"></div>
      </div>
      <div class="col-9 p-3" v-for="p in posts" :key="p.id">
        <Post :postData="p" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { logger } from "../utils/Logger";
import { AppState } from "../AppState";
import { postsService } from "../services/PostsService";

export default {
  name: "Home",
  setup() {
    onMounted(async () => {
      try {
        //NOTE: can't get postsService to migrate
        await postsService.getAll();
      } catch (error) {
        logger.log(error);
        // Pop.toast(error.message, "error");
      }
    });
    return {
      posts: computed(() => AppState.posts),
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
