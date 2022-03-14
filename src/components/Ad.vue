<template>
  <div class="container-fluid">
    <div class="col-12">
      <!-- //NOTE: my code really does not like the router-link trying to create ads -->
      <!-- <router-link :to="{ name: 'ad', params: { id: adData.ad}}"> -->
      <!-- <h3>I am the component that is being called</h3> -->
      <!-- NOTE throw whichever ad you want into an img tag -->
      <!-- <div>{{ adData.tall }}</div> -->
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