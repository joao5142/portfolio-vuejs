<template>
  <header class="header container">
    <v-row class="d-flex justify-space-between">
      <v-col md="6" class="d-flex justify-center align-center">
        <div>
          <h1 data-aos="zoom-in" data-aos-duration="1000" class="header__title">
            Olá ,Sou<br />João Paulo
          </h1>
          <h4
            class="mb-3"
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            Desenvolvedor Front-end
          </h4>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            class="header__socials"
            title="Redes Sociais"
          >
            <a
              href="https://linkedin.com/in/joão-paulo-8b38b8254"
              aria-label="Linkedin"
              title="Linkedin Icone"
            >
              <linkedin-icon />
            </a>
            <a
              href="mailto:joaopauloneto3687@gmail.com"
              aria-label="Email"
              title="Email Icone"
            >
              <email-icon />
            </a>
            <a aria-label="Facebook" title="Facebook Icone">
              <facebook-icon />
            </a>
          </div>

          <v-btn
            class="mt-7"
            dark
            rounded
            color="#36B7FF"
            href="/static/arquivos/resume.pdf"
            target="_blank"
            >Ver Resume</v-btn
          >
        </div>
      </v-col>
      <v-col cols="12" md="6" class="d-flex justify-center">
        <v-img
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-duration="1000"
          width="526"
          height="526"
          contain
          class="header__avatar"
          src="/static/me.png"
        ></v-img>
      </v-col>
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
};
</script>

<style lang="scss" scoped>
.header {
  margin-top: 50px;
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
    object-position: center;
  }
  &__decorator {
    width: 100%;
    height: 4px;
    background-color: $blue-5;
  }

  @media (max-width: 500px) {
    &__title {
      font-size: 3rem;
    }

    &__avatar {
      width: 200px;
      height: 200px;
      max-width: 200px;
      max-height: 200px;
    }
    &__decorator {
      margin-top: 10px;
      width: 100%;
      height: 2px;
      background-color: $blue-5;
    }

    & {
      margin-top: 10px;
    }
  }
}
</style>
