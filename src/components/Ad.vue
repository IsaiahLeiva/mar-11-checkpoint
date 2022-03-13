<template>
  <div class="container-fluid">
    <div class="col-12">
      <img class="" :src="adData.ads" alt="" />
    </div>
  </div>
</template>


<script>
export default {
  props: {
    adData: {
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
</style>