<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 27 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.8334 0.166687H3.16671C1.74587 0.166687 0.596291 1.32919 0.596291 2.75002L0.583374 18.25C0.583374 19.6709 1.74587 20.8334 3.16671 20.8334H23.8334C25.2542 20.8334 26.4167 19.6709 26.4167 18.25V2.75002C26.4167 1.32919 25.2542 0.166687 23.8334 0.166687ZM23.8334 5.33335L13.5 11.7917L3.16671 5.33335V2.75002L13.5 9.20835L23.8334 2.75002V5.33335Z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: "EmailIcon",
  props: {
    color: {
      default: "#B3B3B3",
    },
    width: {
      default: "26",
    },
    height: {
      default: "26",
    },
  },
};
</script>

<style></style>
