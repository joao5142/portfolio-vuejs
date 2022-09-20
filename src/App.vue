<template>
  <v-app>
    <app-header />
    <app-main />
    <app-footer />
  </v-app>
</template>

<script>
import AppHeader from "@/components/header/AppHeader.vue";
import AppMain from "@/components/main/AppMain.vue";
import AppFooter from "@/components/footer/AppFooter.vue";

export default {
  name: "App",

  components: { AppHeader, AppMain, AppFooter },
};
</script>

<style lang="scss">
.container {
  max-width: 70%;
  margin: 0 auto;
}
.base-card {
  border-radius: $border-radius;
  color: $gray-10;
  background-color: $white-1;
  padding: 20px;
}
</style>
