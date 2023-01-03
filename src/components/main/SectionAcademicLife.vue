<template>
  <section class="section-academic-life">
    <h3 class="text-center mb-15">Vida Acadêmica</h3>
    <div
      class="container section-academic-life__container-card d-flex"
      aria-label="Container Cards Vida Acadêmica"
      v-dragscroll
    >
      <div
        v-for="(certification, index) in certifications"
        :key="index"
        class="section-academic-life__card base-card"
      >
        <v-img
          max-width="70px"
          src="/static/certificate.svg"
          alt="Icone Certificado"
        />
        <div aria-label="Conteúdo Card" class="ps-2">
          <h4 class="mb-2">{{ certification.title }}</h4>
          <p>{{ certification.description }}</p>
          <a :href="certification.url" target="_blank">Acessar Certificado</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      certifications: [
        {
          title: "Bacharelado em Ciência da Computação",
          url: "/static/arquivos/cco.pdf",
          description: "Graduação em ciência da computação finalizado em 2022",
        },
        {
          title: "CC50 - O Curso de Harvard no brasil",
          url: "/static/arquivos/cc50.pdf",
          description: "Introdução a ciência da computação ",
        },

        {
          title: "Segurança em Tecnologia da Informação",
          url: "/static/arquivos/seguranca.pdf",
          description:
            "Aspectos fundamentais da segurança em tecnologia da informação.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.section-academic-life {
  padding: 100px 30px;

  &__container-card {
    cursor: grab;
    margin-top: 50px;
    padding-bottom: 20px;
    gap: 100px;
    overflow-x: auto;
    @include customScroll($blue-5, "horizontal");

    &:active {
      cursor: grabbing;
    }
  }

  &__card {
    min-width: 550px;
    max-width: 500px;
    display: flex;
    align-items: center;

    img {
      width: 100px;
      height: 50px;
      object-fit: cover;
    }

    &:first-child {
      margin-left: auto;
    }

    &:last-child {
      margin-right: auto;
    }

    box-shadow: $shadow;
  }
}
</style>
