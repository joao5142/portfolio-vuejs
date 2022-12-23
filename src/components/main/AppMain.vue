<template>
  <main>
    <section class="container">
      <v-row>
        <v-col md="6">
          <h3 class="mb-5">Sobre mim</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </p>
        </v-col>
        <v-col md="6" class="d-flex justify-center">
          <carousel-about-me />
        </v-col>
      </v-row>
    </section>

    <section-academic-life />
    <section-project />
    <section-events />
    <section-tools />
    <section-recommendations />

    <ModalProject
      :modal-open="isModalProjectOpen"
      @close-modal="isModalProjectOpen = false"
    />
  </main>
</template>

<script>
import CarouselAboutMe from "./CarouselAboutMe.vue";
import ModalProject from "./ModalProject.vue";
import SectionAcademicLife from "./SectionAcademicLife.vue";
import SectionEvents from "./SectionEvents.vue";
import SectionProject from "./SectionProject.vue";
import SectionRecommendations from "./SectionRecommendations.vue";
import SectionTools from "./SectionTools.vue";

export default {
  components: {
    CarouselAboutMe,
    ModalProject,

    SectionAcademicLife,
    SectionProject,
    SectionEvents,
    SectionTools,
    SectionRecommendations,
  },
  data() {
    return {
      isModalProjectOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  margin: 20px auto 100px auto;
}

@media (max-width: 400px) {
  h3 {
    font-size: 2rem;
  }
}
</style>
