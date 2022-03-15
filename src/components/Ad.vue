<template>
  <div class="container-fluid">
    <div class="col-12">
      <!-- NOTE throw whichever ad you want into an img tag -->
      <img :src="adData.tall" alt="advertisement" />
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