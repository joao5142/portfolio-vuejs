<template>
  <section class="container section-projects">
    <h3>Projetos</h3>
    <p class="mb-8">Total de projetos: 6</p>
    <v-tabs v-model="selectedTabProjects" align-with-title>
      <v-tab v-for="(tab, index) in projectItems" :key="'projectTab' + index">
        {{ tab.label }}
      </v-tab>

      <v-tabs-items v-model="selectedTabProjects">
        <v-tab-item
          v-for="(item, tabIndex) in projectItems"
          :key="'itemTab' + tabIndex"
        >
          <v-row class="mt-2 flex-wrap pa-2 py-4">
            <v-col
              cols="12"
              sm="6"
              md="4"
              lg="4"
              xl="3"
              v-for="(card, cardIndex) in item.itens"
              :key="'cardIndex' + cardIndex"
              class="section-projects__col-card"
            >
              <div
                class="section-projects__card"
                aria-label="Card Projeto"
                title="Card Projeto"
              >
                <v-img :src="card.image"></v-img>

                <div>
                  <h4 class="mb-3">{{ card.title }}</h4>
                  <p>
                    {{ card.description }}
                  </p>

                  <a @click.prevent="$emit('show-project', card)">Ver mais </a>
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
      isModalProjectOpen: false,

      projectItems: [
        {
          label: "Front-end",
          itens: [
            {
              title: "Naped",
              image: "/static/projetos/1.png",
              description: "Desenvolvido com React e NextJs",
              url: "https://naped-animes.vercel.app/",
              technologies: ["React", "NextJs", "Js", "Seo"],
            },
            {
              title: "Loopstudios",
              image: "/static/projetos/2.png",
              description: "Desenvolvido com React e NextJs",
              url: "https://loop-studios-landing-page-gamma.vercel.app/",
              technologies: ["React", "NextJs", "Js", "Bootstrap"],
            },
            {
              title: "Lol Music Player",
              image: "/static/projetos/3.png",
              description: "Desenvolvido com Html,Css e Js",
              url: "https://lolmusicplayer.netlify.app/",
              technologies: ["Html", "BEM CSS", "WAI-ARIA", "Js", "DOM"],
            },
            {
              title: "Fylo",
              image: "/static/projetos/4.png",
              description: "Desenvolvido com React e NextJs",
              url: "https://fylolandingpagej.netlify.app/",
              technologies: ["React", "NextJs", "Js", "Bootstrap"],
            },
            {
              title: "Huddle",
              image: "/static/projetos/5.png",
              description: "Desenvolvido com React e NextJs",
              url: "https://frontendmentordesafio1.netlify.app/",
              technologies: ["React", "NextJs", "Js", "Bootstrap"],
            },
            {
              title: "Rachi",
              image: "/static/projetos/6.png",
              description: "Desenvolvido com VueJs",
              url: "https://desafiorachi.netlify.app/",
              technologies: ["VueJs", "Js", "Bootstrap"],
            },
          ],
        },
        { label: "Back-end", itens: [] },
        { label: "Fullstack", itens: [] },
        { label: "Diversos", itens: [] },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.section-projects {
  &__card {
    border-radius: $border-radius;
    box-shadow: $shadow;
    display: flex;
    flex-direction: column;

    gap: 20px;
    padding: 20px;
    width: 100%;
    height: 100%;

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
  }
}
</style>
