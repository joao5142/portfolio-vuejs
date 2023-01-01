<template>
  <div class="loading" v-if="isLoading">
    <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: "LoadingComponent",
  props: {
    isLoading: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.8);
}
</style>
