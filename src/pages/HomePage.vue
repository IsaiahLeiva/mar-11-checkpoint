<template>
  <div class="container-fluid">
    <div class="row justify-content-end">
      <div class="col-md-4 p-4 mt-5 bg-dark">
        <div class="profile-section">
          This is where the profile section will be
          <ProfilePage />
        </div>
      </div>
      <div class="col-md-8 p-3" v-for="p in posts" :key="p.id">
        <button
          @click="changePage(nextPage)"
          class="btn btn-outline-danger me-2"
          :class="{ disabled: !olderPosts }"
          :disabled="!olderPosts"
        >
          Previous Posts
        </button>
        <button
          v-if="nextPage"
          @click="changePage(nextPage)"
          class="btn btn-outline-danger"
        >
          Next Posts
        </button>
        <div>
          <Post :postData="p" />
        </div>
      </div>
      <!-- <div class="col-3 p-3">This is where an ad will be</div> -->
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { logger } from "../utils/Logger";
import { AppState } from "../AppState";
import { postsService } from "../services/PostsService";
import Pop from "../utils/Pop";

export default {
  name: "Home",
  setup() {
    onMounted(async () => {
      try {
        await postsService.getAll();
      } catch (error) {
        logger.log(error);
        Pop.toast(error.message, "error");
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
