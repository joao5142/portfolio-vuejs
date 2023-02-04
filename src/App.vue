<template>
  <v-app>
    <app-header />
    <app-main />
    <app-footer />

    <img class="icon" src="/static/icons/mario.png" alt="Icon" />
    <img class="icon" src="/static/icons/estrela.png" alt="Icon" />
    <img class="icon" src="/static/icons/link.png" alt="Icon" />
    <img class="icon" src="/static/icons/vida.png" alt="Icon" />
    <img class="icon" src="/static/icons/vida-verde.png" alt="Icon" />
    <img class="icon" src="/static/icons/donkie.png" alt="Icon" />
    <img class="icon" src="/static/icons/poke.png" alt="Icon" />
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
.icon {
  max-width: 60px;
  min-height: 60px;
  object-fit: cover;
  position: absolute;

  @media (max-width: 600px) {
    max-width: 40px;
    min-height: 40px;
  }
}
.icon:nth-of-type(1) {
  top: 20px;
  left: 80px;

  @media (max-width: 600px) {
    left: 10px;
  }
}
.icon:nth-of-type(2) {
  top: 50%;
  right: 50px;
  @media (max-width: 600px) {
    top: 51%;
  }
}
.icon:nth-of-type(3) {
  bottom: 20px;
  left: 20px;
}
.icon:nth-of-type(4) {
  top: 25%;
  right: 20px;
}
.icon:nth-of-type(5) {
  top: 65%;
  left: 20px;

  @media (max-width: 500px) {
    top: 58%;
  }
}

.icon:nth-of-type(6) {
  top: 35%;
  left: 20px;

  @media (max-width: 500px) {
    top: 33%;
  }
}
.icon:nth-of-type(7) {
  bottom: 10%;
  right: 20px;
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
