<template>
  <div class="about text-center">
    <div class="col-1 bg-dark">
      <div v-for="a in ads" :key="a.title">
        <Ad :adData="a" />
      </div>
    </div>
    <div class="col-11">
      <h1>Welcome {{ account.name }}</h1>
      <img class="rounded" :src="account.picture" alt="" />
      <p>{{ account.email }}</p>
      <div>
        <ProfileForm />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { AppState } from "../AppState";
export default {
  name: "Account",
  setup() {
    const editable = ref({});
    return {
      editable,
      account: computed(() => AppState.account),
    };
  },
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
