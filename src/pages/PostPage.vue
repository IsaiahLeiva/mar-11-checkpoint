<template>
  <div class="container-fluid">
    <div class="row w-100 m-2 p-3">
      <div class="selectable d-flex">
        <h3>{{ postData.name }}</h3>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
.profile-img {
  height: 100px;
  width: 100px;
}
</style>