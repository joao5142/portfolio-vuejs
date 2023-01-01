<template>
  <section class="section-academic-life">
    <h3 class="text-center">Vida Acadêmica</h3>
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
          url: "https://edools-3-production.s3.amazonaws.com/org-6988/school-7227/certificates/enrollment-8146264/course-84414-jvkxd.pdf",
          description: "Graduação em ciência da computação finalizado em 2022",
        },
        {
          title: "CC50 - O Curso de Harvard no brasil",
          url: "https://edools-3-production.s3.amazonaws.com/org-6988/school-7227/certificates/enrollment-8146264/course-84414-jvkxd.pdf",
          description: "Introdução a ciência da computação ",
        },

        {
          title: "Segurança em Tecnologia da Informação",
          url: "https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateDialog.aspx?UNrZMLcmJxJ7%2bg6IMrODmkBjaG9OZlnO",
          description:
            "Aspectos fundamentais da segurança em tecnologia da informação e, também, boas práticas para combater riscos, ameaças e ataques virtuais. ",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.section-academic-life {
  background: $blue-dark;
  color: white;
  padding: 30px;

  &__container-card {
    cursor: grab;
    margin-top: 50px;
    padding-bottom: 20px;
    gap: 100px;
    overflow-x: auto;
    @include customScroll($blue-1, "horizontal");

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
  }
}
</style>
