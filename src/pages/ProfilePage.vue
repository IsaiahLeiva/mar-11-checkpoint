<template>
  <div class="container-fluid">
    <div class="row shadow rounded m-3 bg-white">
      <div class="col-12 about text-center p-2">
        <h1>{{ profile.name }}</h1>
        <img
          class="rounded profile-img"
          :src="profile.picture"
          alt="profile-picture"
        />
        <p>{{ profile.email }}</p>
        <p>{{ profile.bio }}</p>
        <p><i class="mdi mdi-github">Github: </i>{{ profile.github }}</p>
        <p><i class="mdi mdi-linkedin">LinkedIn: </i>{{ profile.linkedin }}</p>
        <p>Current Class: {{ profile.class }}</p>
        <p>Graduated? {{ profile.graduated }}</p>
        <img class="bg-image" :src="profile.coverImg" alt="" />
        <button
          v-if="profile.id == account.id"
          data-bs-toggle="modal"
          data-bs-target="#profile-modal"
          class="btn btn-outline-danger"
        >
          <i class="mdi mdi-pencil"></i> Edit Profile
        </button>
      </div>
    </div>
    <div class="row m-3">
      <div class="col-12">
        <PostForm v-if="profile.id == account.id" />
      </div>
    </div>
    <div
      class="row d-flex flex-column align-items-center justify-content-center"
    >
      <div class="col-8" v-for="p in posts" :key="p.id">
        <Post :postData="p" />
      </div>
    </div>
    <Modal id="profile-modal">
      <template #title>Edit Profile</template>
      <template #body><ProfileForm /></template>
    </Modal>
  </div>
</template>


<script>
import { computed, onMounted, watchEffect } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { AppState } from "../AppState";
import { postsService } from "../services/PostsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { profilesService } from "../services/ProfilesService";
export default {
  setup() {
    const route = useRoute();
    watchEffect(async () => {
      try {
        AppState.activePost = {};
        await profilesService.getProfile(route.params.id);
        await postsService.getAll({ creatorId: route.params.id });
      } catch (error) {
        logger.error(error.message);
        Pop.toast(error.message, "error");
      }
    });
    return {
      profile: computed(() => AppState.profile),
      posts: computed(() => AppState.posts),
      account: computed(() => AppState.account),
    };
  },
};
</script>


<style lang="scss" scoped>
.profile-img {
  height: 200px;
}
</style>