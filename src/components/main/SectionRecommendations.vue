<template>
  <section class="container section-recommendations">
    <h3 class="text-center mb-10">Recomendações</h3>
    <v-row style="margin: 120px 0px 50px 0px" class="flex-lg-nowrap">
      <v-col
        cols="12"
        lg="4"
        v-for="(recommendation, index) in recommendations"
        :key="index + 'recommendation'"
        style="margin-bottom: 100px"
      >
        <CardRecommendation :featured="index == 1" :recommendation="recommendation" />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import CardRecommendation from "./CardRecommendation.vue";

export default {
  name: "SectionRecommendation",
  components: {
    CardRecommendation,
  },
  data() {
    return {
      recommendations: [
        {
          name: "Dayvison Santos de Souza",
          position: "Product Owner | Analista de Qualidade",
          message:
            "João é um cara extremamente competente, atencioso e prestativo. Desempenha um importante papel em nossa equipe e está sempre apto a aprender novos métodos e formas de trabalho, para melhorias nos processos.",
          avatar: "/static/users/user1.jfif",
        },
        {
          name: "Ana Carla Lima",
          position: "Desenvolvedora Full Stack",
          message:
            "João desempenha sua função de forma exemplar, um ótimo profissional para trabalhar em equipe e sempre disposto a repassar seus conhecimentos com excelência e paciência.",
          avatar: "/static/users/user2.jfif",
        },

        {
          name: "Davi Guerra",
          position: "UX/UI",
          message:
            "João é muito bom naquilo que faz. Uma habilidade incrível e uma vontade impressionante de se tornar o melhor naquilo que faz. Com vocês, o Rei do Front-End 👑",
          avatar: "/static/users/user3.jfif",
        },
        {
          name: "Jóse Enódio",
          position: "Desenvolvedor front-end e mobile",
          message:
            "João tem uma capacidade de trabalho acima do normal, destaca-se pelos profundos conhecimentos técnicos e empatia pelo próximo. Irá agregar valor para qualquer organização.",
          avatar: "/static/users/user4.jfif",
        },
      ],
      interval: null,
    };
  },

  methods: {
    moveRecommendation() {
      try {
        let arrAux = [...this.recommendations];
        for (let i = 0; i < arrAux.length - 1; i++) {
          let aux = arrAux[i];

          if (i < arrAux.length - 1) {
            arrAux[i] = arrAux[i + 1];
            arrAux[i + 1] = aux;
          }
        }
        this.recommendations = [...arrAux];
      } catch (e) {
        clearInterval(this.interval);
      }
    },
  },
  mounted() {
    this.interval = setInterval(this.moveRecommendation, 8000);
  },
};
</script>

<style lang="scss" scoped>
.section-recommendations {
  overflow-x: hidden;
}
</style>
