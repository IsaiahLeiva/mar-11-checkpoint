<template>
  <router-link :to="{ name: 'Post', params: { id: postData.id } }">
    <div class="row blog shadow border p-2 m-2 selectable d-flex">
      <div class="col-9">
        //NOTE: come back to this later
        <img src="" alt="" />
      </div>
    </div>
  </router-link>
</template>


<script>
export default {
  props: {
    postData: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
.post {
  min-height: 35vh;
  transition: all 0.12s ease;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
}
.post-img {
  height: 35vh;
  width: 100%;
  object-fit: contain;
  object-position: center;
}
.post:hover {
  transform: scale(1.05);
  outline: 1px solid var(--bs-light);
  box-shadow: 0px 15px 10px rgba(0, 0, 0, 0.3);
}
</style>