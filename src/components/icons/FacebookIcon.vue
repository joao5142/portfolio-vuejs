<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.4167 13.5C26.4167 6.36998 20.63 0.583313 13.5 0.583313C6.37004 0.583313 0.583374 6.36998 0.583374 13.5C0.583374 19.7516 5.02671 24.9571 10.9167 26.1583V17.375H8.33337V13.5H10.9167V10.2708C10.9167 7.7779 12.9446 5.74998 15.4375 5.74998H18.6667V9.62498H16.0834C15.373 9.62498 14.7917 10.2062 14.7917 10.9166V13.5H18.6667V17.375H14.7917V26.3521C21.3146 25.7062 26.4167 20.2037 26.4167 13.5Z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: "FacebookIcon",
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
