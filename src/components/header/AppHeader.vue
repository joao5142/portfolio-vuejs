<template>
  <header class="header container">
    <v-row class="d-flex justify-space-between">
      <v-col md="6" class="d-flex justify-center align-center">
        <div>
          <h1 data-aos="zoom-in" data-aos-duration="1000" class="header__title">
            Olá ,Sou<br />Carlos Lima
          </h1>
          <h4 data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">
            Po, Pm e Especialista em EDTECH
          </h4>
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="1000"
            class="header__socials"
            aria-describedby="Redes Sociais"
          >
            <a href="" title="Linkedin Icone">
              <linkedin-icon />
            </a>
            <a href="" title="Email Icone">
              <email-icon />
            </a>
            <a href="" title="Facebook Icone">
              <facebook-icon />
            </a>
          </div>
        </div>
      </v-col>
      <v-col md="6" class="d-flex justify-center"
        ><v-img
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-duration="1000"
          width="326"
          height="326"
          class="header__avatar"
          src="https://img.freepik.com/free-photo/young-handsome-man-posing_144627-28081.jpg?w=1380&t=st=1662772114~exp=1662772714~hmac=31b4bca73e4c5159d2f03769ada4d194bd96de2c390e3f5368383bbc123417f6"
        ></v-img
      ></v-col>
    </v-row>
    <div class="header__decorator"></div>
  </header>
</template>

<script>
import EmailIcon from "../icons/EmailIcon.vue";
import FacebookIcon from "../icons/FacebookIcon.vue";
import LinkedinIcon from "../icons/LinkedinIcon.vue";
export default {
  name: "AppHeader",
  components: { EmailIcon, FacebookIcon, LinkedinIcon },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin-top: 200px;

  &__socials {
    display: flex;
    gap: 20px;
  }
  &__title {
    position: relative;
    z-index: 1;

    &::after {
      content: "";
      position: absolute;
      top: 20px;
      left: -10px;
      background: url("/public/static/header-detail.svg");
      width: 120px;
      height: 120px;
      background-repeat: no-repeat;
      z-index: -1;
    }
  }

  &__avatar {
    max-width: 326px;
    max-height: 326px;
    border-radius: 50%;
  }
  &__decorator {
    margin-top: 100px;
    width: 100%;
    height: 2px;
    background-color: $blue-5;
  }
}
</style>
