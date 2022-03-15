<template>
  <div class="container-fluid">
    <div class="row justify-content-end">
      <div class="col-4 p-4 mt-5 bg-dark">
        <div class="row p-5">
          <div class="profile-section">
            <ProfilePage />
          </div>
        </div>
        //NOTE advertisement
        <div class="row p-5" v-for="a in ads" :key="a.title">
          <Ad :adData="a" />
        </div>
        <div class="row p-5"></div>
      </div>
      <div class="col-md-8 mb-2 p-3">
        <button
          @click="changePage(previousPage)"
          class="btn btn-outline-danger me-2"
          v-if="previousPage"
        >
          Previous Posts
        </button>
        <button @click="changePage(nextPage)" class="btn btn-outline-danger">
          Next Posts
        </button>
        <div v-for="p in posts" :key="p.id">
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
import Ad from "../components/Ad.vue";
import Pop from "../utils/Pop";
import { adsService } from "../services/AdsService";

export default {
  name: "Home",
  components: { Ad },
  setup() {
    onMounted(async () => {
      try {
        await postsService.getAll();
        await adsService.getAll();
      } catch (error) {
        logger.log(error);
        // Pop.toast(error.message, "error");
      }
    });
    return {
      // NOTE bring in your ads with a computed
      posts: computed(() => AppState.posts),
      //NOTE: Uncomment when ready
      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.olderPosts),
      ads: computed(() => AppState.ads),
      async changePage(page) {
        try {
          await postsService.changePage(page);
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },
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
