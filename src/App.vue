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
  max-width: 80%;
  margin: 0 auto;

  @media (max-width: 400px) {
    max-width: 95%;
    margin: 0 auto;
  }
  @media (min-width: 1800px) {
    max-width: 1600px;
    margin: 0 auto;
  }

  @media (min-width: 2500px) {
    max-width: 1800px;
    margin: 0 auto;
  }
}
.base-card {
  border-radius: $border-radius;
  color: $gray-10;
  background-color: $white-1;
  padding: 20px;
}

@media (max-width: 400px) {
}
</style>
