<template>
  <form @submit.prevent="editProfile">
    <div class="raw profile-form">
      <div id="name-field" class="col-6 mb-3">
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
        <input type="text" />
      </div>
      <div id="image-field">
        <input type="text" />
      </div>
      <div id="email">
        <input type="text" />
      </div>
    </div>
  </form>
</template>


<script>
export default {
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>