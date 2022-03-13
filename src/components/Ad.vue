<template>
  <div class="container-fluid">
    <div class="col-12">
      <!-- //NOTE: my code really does not like the router-link trying to create ads -->
      <!-- <router-link :to="{ name: 'ad', params: { id: adData.ad}}"> -->
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