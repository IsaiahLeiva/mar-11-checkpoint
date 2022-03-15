<template>
  <div class="container-fluid">
    <form @submit.prevent="editProfile">
      <div class="bg-dark col-3 p-5">
        <div v-for="a in ads" :key="a.title">
          <Ad :adData="a" />
        </div>
      </div>
      <div class="raw profile-form col-9 mb-3">
        <div id="name-field">
          <input
            type="text"
            v-model="editable.name"
            class="form-control"
            name="name"
            id="name"
            placeholder="Name..."
          />
        </div>
        <div id="bio-field">
          <input
            type="text"
            v-model="editable.bio"
            class="form-control"
            name="bio"
            id="bio"
            placeholder="bio..."
          />
        </div>
        <div id="image-field">
          <input
            type="text"
            v-model="editable.imgUrl"
            class="form-control"
            name="imgUrl"
            id="imgUrl"
            placeholder="Post Image Link..."
          />
        </div>
        <div id="email">
          <input
            type="text"
            v-model="editable.email"
            class="form-control"
            name="email"
            id="email"
            placeholder="email..."
          />
        </div>
        <button class="btn btn-outline-warning" @click="update">
          Edit Profile
        </button>
      </div>
    </form>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity";
import { logger } from "../utils/Logger";
import { AppState } from "../AppState";
import { Modal } from "bootstrap";
import { profilesService } from "../services/ProfilesService";
import Pop from "../utils/Pop";
import { watchEffect } from "@vue/runtime-core";
export default {
  setup() {
    const editable = ref({});
    watchEffect(() => {
      editable.value = AppState.account;
    });
    return {
      editable,
      async editProfile() {
        try {
          await profilesService.editProfile(
            AppState.profile.id,
            editable.value
          );
          Modal.getOrCreateInstance(
            document.getElementById("profile-modal")
          ).hide();
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>