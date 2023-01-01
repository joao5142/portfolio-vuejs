<template>
  <main>
    <section class="container">
      <v-row>
        <v-col md="6">
          <h3 class="mb-5">Sobre mim</h3>
          <p>
            Sou uma pessoa que nunca se cansa de buscar conhecimentos novos,
            sempre estou disposto a ouvir e aprender com outras pessoas. Sendo
            um profissional que gosta do que faz e com isso busco me tornar cada
            vez melhor e eficiente. Prezo mais pelo desenvolvimento pessoal,
            pois soft skills são mais difíceis de obter. Também gosto de
            compartilhar meus conhecimentos e ser aquilo que eu precisava quando
            estava no começo.
          </p>
        </v-col>
        <v-col md="6" class="d-flex justify-center">
          <carousel-about-me />
        </v-col>
      </v-row>
    </section>

    <section-academic-life />
    <section-project
      @show-project="
        selectedProject = $event;
        isModalProjectOpen = true;
      "
    />
    <section-events />
    <section-tools />
    <section-recommendations />

    <ModalProject
      :modal-open="isModalProjectOpen"
      @close-modal="isModalProjectOpen = false"
      :project="selectedProject"
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
      selectedProject: null,
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
