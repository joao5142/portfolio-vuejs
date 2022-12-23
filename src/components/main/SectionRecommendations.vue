<template>
  <section class="container section-recommendations">
    <h3 class="text-center mb-10">Recomendações</h3>

    <v-row style="margin: 120px 0px 50px 0px">
      <v-col
        cols="12"
        md="4"
        v-for="(recommendation, index) in recommendations"
        :key="index + 'recommendation'"
        style="margin-bottom: 100px"
      >
        <CardRecommendation
          :featured="index == 1"
          :recommendation="recommendation"
        />
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
          name: "João Paulo",
          position: "Desenvolvedor Front-end",
          avatar: "/static/users/user1.png",
        },
        {
          name: "Beatriz Silva",
          position: "Ux/Ui",
          avatar: "/static/users/user2.png",
        },
        {
          name: "Matheus Costa",
          position: "Desenvolvedor Back-end",
          avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
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
    this.interval = setInterval(this.moveRecommendation, 5000);
  },
};
</script>

<style lang="scss" scoped></style>
