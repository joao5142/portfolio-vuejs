<template>
  <main>
    <section
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos="zoom-in"
      data-aos-delay="1000"
      data-aos-duration="1000"
      class="container mt-15"
    >
      <v-row class="d-flex align-center">
        <v-col cols="12" lg="6" class="d-flex justify-center order-2 order-md-1">
          <carousel-projects />
        </v-col>
        <v-col cols="12" lg="6">
          <h3 class="mb-5">Sobre mim</h3>
          <p class="mb-0">
            Sou uma pessoa que nunca se cansa de buscar conhecimentos novos, sempre estou disposto a ouvir e aprender
            com outras pessoas. Sendo um profissional que gosta do que faz e com isso busco me tornar cada vez melhor e
            eficiente.Sempre busco me atualizar nas tecnologias do mercado e nunca tenho o pensamento de ficar
            estagnado,por isso,busco novos desafios que possam me levar para o próximo nível.Cresci com a tecnologia e
            hoje faço dela a minha paixão.
          </p>
        </v-col>
      </v-row>
    </section>

    <section-academic-life v-scroll-reveal />
    <section-project
      v-scroll-reveal
      @show-project="
        selectedProject = $event;
        isModalProjectOpen = true;
      "
    />
    <section-events v-scroll-reveal />
    <section-tools v-scroll-reveal />
    <section-recommendations v-scroll-reveal />

    <ModalProject
      :modal-open="isModalProjectOpen"
      @close-modal="isModalProjectOpen = false"
      :project="selectedProject"
    />
  </main>
</template>

<script>
import ModalProject from "./ModalProject.vue";
import SectionAcademicLife from "./SectionAcademicLife.vue";
import SectionEvents from "./SectionEvents.vue";
import SectionProject from "./SectionProject.vue";
import SectionRecommendations from "./SectionRecommendations.vue";
import SectionTools from "./SectionTools.vue";
import CarouselProjects from "../main/CarouselProjects.vue";

export default {
  components: {
    ModalProject,
    SectionAcademicLife,
    SectionProject,
    SectionEvents,
    SectionTools,
    SectionRecommendations,
    CarouselProjects,
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
.avatar {
  max-width: 280px;
  max-height: 280px;
  border-radius: 50%;
}
section {
  margin: 20px auto 100px auto;
}

@media (max-width: 400px) {
  h3 {
    font-size: 2rem;
  }
}
</style>
