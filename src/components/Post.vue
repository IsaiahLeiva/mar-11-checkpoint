<template>
  <router-link :to="{ name: 'Post', params: { id: postData.id } }">
    <div
      class="row blog shadow border p-1 m-1 selectable d-flex bg-dark rounded-3"
    >
      <div class="col-12">
        <img class="post-img" :src="postData.imgUrl" alt="" />
        <h6 class="">
          <b> {{ postData.creator.name }}</b>
        </h6>
        <p>{{ postData.body }}</p>
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
  object-position: right;
}
.post-img {
  height: 10vh;
  width: 15vh;
  object-fit: contain;
  object-position: left;
  border-radius: 15px;
}
.post:hover {
  transform: scale(1.05);
  outline: 1px solid var(--bs-light);
  box-shadow: 0px 15px 10px rgba(0, 0, 0, 0.3);
}
</style>