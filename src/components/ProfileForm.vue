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
          placeholder="Upload Image..."
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