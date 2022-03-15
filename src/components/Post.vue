<template>
  <div class="row blog shadow border p-1 m-1 d-flex bg-dark rounded-3">
    <div class="col-12">
      <router-link
        :to="{ name: 'Profile', params: { id: postData.creatorId } }"
      >
        <img
          class="post-img selectable"
          :src="postData.creator.picture"
          alt=""
        />
      </router-link>
      <h6 class="">
        <b> {{ postData.creator.name }}</b>
      </h6>
      <p>{{ postData.body }}</p>
      <img class="img-fluid" :src="postData.imgUrl" alt="" />
      <p>Created At: {{ postData.creator.createdAt }}</p>
      <p><i class="mdi mdi-heart"></i> Likes: {{ postData.likes.length }}</p>
      <button class="bg-danger" v-if="account.id == post.creatorId">
        Delete Post
      </button>
    </div>
  </div>
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