<template>
  <section class="container section-projects">
    <h3>Projetos</h3>
    <p class="mb-8">Total de projetos: 15</p>
    <v-tabs v-model="selectedTabProjects" align-with-title>
      <v-tab v-for="(tab, index) in projectItems" :key="'projectTab' + index">
        {{ tab.label }}
      </v-tab>

      <v-tabs-items v-model="selectedTabProjects">
        <v-tab-item
          v-for="(item, tabIndex) in projectItems"
          :key="'itemTab' + tabIndex"
        >
          <v-row class="pa-4 mt-2 flex-wrap">
            <v-col
              cols="12"
              sm="12"
              md="6"
              lg="4"
              v-for="(card, cardIndex) in item.itens"
              :key="'cardIndex' + cardIndex"
              class="section-projects__col-card ps-0 pe-4"
            >
              <div
                class="section-projects__card"
                aria-describedby="Card Projeto"
                title="Card Projeto"
              >
                <v-img
                  max-width="80px"
                  src="https://img.freepik.com/free-vector/organizing-projects-concept-illustration_114360-542.jpg?w=826&t=st=1662774070~exp=1662774670~hmac=cb4fb4e56ada094d7172e1960a7ea7f680ec9299b0665a060aff360aa1d9c059"
                ></v-img>

                <div>
                  <h4>Título</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quod, quidem. Totam similique
                  </p>

                  <a @click.prevent="isModalProjectOpen = true">Ver mais </a>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </section>
</template>

<script>
export default {
  name: "SectionProject",
  data() {
    return {
      selectedTabProjects: 0,

      projectItems: [
        {
          label: "Front-end",
          itens: ["teste 123", "teste 123", "teste 123", "teste 123"],
        },
        { label: "Back-end", itens: ["teste 123"] },
        { label: "Fullstack", itens: ["teste 123"] },
        { label: "Diversos", itens: ["teste 123"] },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.section-projects {
  &__card {
    border-radius: $border-radius;
    box-shadow: 0px 4px 4px #aeaeae;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    width: 100%;

    transition: all 0.1s ease-in-out;
  }

  @media (max-width: 500px) {
    p {
      word-break: break-all;
      white-space: normal;
    }
    &__card {
      flex-direction: column;
      width: 100%;
      max-width: 100%;
    }
    &__col-card {
      width: 100%;
      max-width: 100%;
      height: 100%;
    }
  }
}
</style>
