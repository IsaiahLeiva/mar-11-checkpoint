<template>
  <form
    @submit.prevent="handleSubmit"
    class="row bg-white justify-content-center shadow rounded p-2 m-5"
  >
    <div class="col-md-4 mb-2">
      <label for="" class="form-label">Post Title</label>
      <input
        v-model="editable.title"
        required
        type="text"
        class="form-control"
      />
    </div>

    <div class="col-md-8 mb-2">
      <label for="" class="form-label">Image</label>
      <input
        v-model="editable.imgUrl"
        required
        type="text"
        class="form-control"
      />
    </div>
    <div class="col-12 mb-2">
      <label for="" class="form-label">Body</label>
      <input
        v-model="editable.body"
        required
        type="text"
        class="form-control"
      />
    </div>
    <div v-if="Post.creator?.name" class="col-12 d-flex justify-content-end">
      <button class="btn btn-outline-warning">Edit</button>
    </div>
    <div v-else class="col-12 d-flex justify-content-end">
      <button class="btn btn-outline-primary">Create</button>
    </div>
    <button
      v-if="!postData.id"
      @click="createPost"
      type="button"
      class="btn btn-success text-dark text-uppercase selectable"
    >
      <b> Create Post </b>
    </button>
  </form>
</template>


<script>
import { computed, ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { watchEffect } from "@vue/runtime-core";
import { AppState } from "../AppState";
import { postsService } from "../services/PostsService";
import { Modal } from "bootstrap";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
export default {
  setup() {
    const editable = ref({});
    const route = useRoute();
    watchEffect(() => {
      editable.value = AppState.activePost;
    });
    return {
      editable,
      post: computed(() => AppState.activePost),
      async handleSubmit() {
        try {
          if (AppState.activePost.id == route.params.id) {
            await postsService.editPost(AppState.activePost.id, editable.value);
            editable.value = {};
            Modal.getOrCreateInstance(
              document.getElementById("post-modal")
            ).hide();
          } else {
            await postsService.createPost(editable.value);
            editable.value = {};
          }
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