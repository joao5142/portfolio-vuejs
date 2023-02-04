<template>
  <section class="section-academic-life">
    <h3 class="text-center mb-15">Vida Acadêmica</h3>
    <div class="container" aria-label="Container Cards Vida Acadêmica">
      <v-row>
        <v-col cols="12" lg="4" v-for="(certification, index) in certifications" :key="index">
          <div class="section-academic-life__card h-full">
            <v-img max-width="70px" src="/static/certificate.svg" alt="Icone Certificado" />
            <div aria-label="Conteúdo Card" class="ps-2">
              <h4 class="mb-2">{{ certification.title }}</h4>
              <p>{{ certification.description }}</p>
              <a :href="certification.url" target="_blank">Acessar Certificado</a>
            </div>
          </div>
        </v-col>
      </v-row>
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
          description: "Aspectos fundamentais da segurança em tecnologia da informação.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.gap-30 {
  gap: 30px;
}
.section-academic-life {
  &__card {
    border-radius: $border-radius;
    padding: 20px;
    height: 100%;
    display: flex;
    align-items: center;

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
