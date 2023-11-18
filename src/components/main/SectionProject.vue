<template>
  <section class="container section-projects">
    <h3>Projetos</h3>
    <p class="mb-8">Total de projetos: {{ totalProjects }}</p>
    <v-tabs v-model="selectedTabProjects" align-with-title>
      <v-tab v-for="(tab, index) in projectItems" :key="'projectTab' + index">
        {{ tab.label }}
      </v-tab>

      <v-tabs-items class="pb-4" v-model="selectedTabProjects">
        <v-tab-item
          class="pb-4"
          v-for="(item, tabIndex) in projectItems"
          :key="'itemTab' + tabIndex"
        >
          <v-row
            :class="{ 'section-projects__container--show': !showMoreProjects }"
            class="mt-2 flex-wrap pa-2 py-4"
          >
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
          <v-btn
            @click="showMoreProjects = !showMoreProjects"
            v-if="tabIndex == 0"
            class="me-3 mt-10 section-projects__button"
            dark
            rounded
            color="#36B7FF"
            ><v-icon>{{
              !showMoreProjects ? " mdi-chevron-down" : "mdi-chevron-up"
            }}</v-icon>
            {{
              !showMoreProjects ? "Ver mais projetos" : "Esconder Projetos"
            }}</v-btn
          >
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

      showMoreProjects: false,

      projectItems: [
        {
          label: "Front-end",
          itens: [
            {
              title: "Facebook Clone",
              image: "/static/projetos/10.png",
              description: "Desenvolvido com Vue e Nuxt",
              url: "https://facebook-front-roan.vercel.app/auth/login",
              github: "https://github.com/joao5142/facebook-front",
              technologies: ["Vue", "Ts", "Nuxt", "Pinia", "SASS"],
            },

            {
              title: "Twitter Clone",
              image: "/static/projetos/9.png",
              description: "Desenvolvido com Vue e Nuxt",
              url: "https://twitter-front-two.vercel.app/",
              github: "https://github.com/joao5142/twitter-front",
              technologies: [
                "Vue",
                "Ts",
                "Nuxt",
                "Pinia",
                "Vitest",
                "Storybook",
                "SASS",
              ],
            },

            {
              title: "Ibook",
              image: "/static/projetos/11.png",
              description: "Desenvolvido com Vue e Nuxt",
              url: "https://ibook-lemon.vercel.app/",
              github: "https://github.com/joao5142/ibook",
              technologies: ["Vue", "Ts", "Nuxt", "Vuex", "Axios"],
            },
            {
              title: "Jogo da velha",
              image: "/static/projetos/5.png",
              description: "Desenvolvido com Vanilla Js|Typescript + Vite",
              url: "https://main--jaotictactoe.netlify.app/",
              github: "https://github.com/joao5142/tic-tac-toe",
              technologies: ["Html", "CSS", "Js"],
            },
            {
              title: "Nft Shop",
              image: "/static/projetos/2.png",
              description: "Desenvolvido com React e Next Js",
              url: "",
              github: "https://github.com/joao5142/Kenai-Movies",
              technologies: ["Html", "CSS", "Js", "Next", "React"],
            },

            {
              title: "Naped",
              image: "/static/projetos/1.png",
              description: "Desenvolvido com React e NextJs",
              url: "https://naped-animes.vercel.app/",
              github: "https://github.com/joao5142/naped-animes",
              technologies: ["React", "NextJs", "Js", "Seo"],
            },

            {
              title: "Invoices",
              image: "/static/projetos/8.png",
              description: "Desenvolvido com React e NextJs",
              url: "",
              github: "https://github.com/joao5142/invoices",
              technologies: [
                "React",
                "NextJs",
                "Js",
                "Styled components",
                "React hook form",
                "Yup",
              ],
            },

            {
              title: "Lol Music Player",
              image: "/static/projetos/3.png",
              description: "Desenvolvido com Html,Css e Js",
              url: "https://lolmusicplayer.netlify.app/",
              github: "https://github.com/joao5142/lol-music-player",
              technologies: ["Html", "BEM CSS", "WAI-ARIA", "Js", "DOM"],
            },

            {
              title: "Huddle",
              image: "/static/projetos/4.png",
              description: "Desenvolvido com React e NextJs",
              url: "https://frontendmentordesafio1.netlify.app/",
              github: "https://github.com/joao5142/huddle-landing-page",
              technologies: ["React", "NextJs", "Js", "Scss"],
            },

            {
              title: "Coffee Delivery",
              image: "/static/projetos/6.png",
              description: "Desenvolvido com React e NextJs",
              url: "https://coffee-delivery-cfg7r9ntg-joao5142.vercel.app/",
              github: "https://github.com/joao5142/coffee-delivery",
              technologies: [
                "React",
                "NextJs",
                "Js",
                "Styled components",
                "Zod",
                "React hook form",
              ],
            },

            {
              title: "Dt money",
              image: "/static/projetos/7.png",
              description: "Desenvolvido com React e NextJs",
              url: "https://dt-money-joao5142.vercel.app/",
              github: "https://github.com/joao5142/dt-money",
              technologies: ["React", "NextJs", "Js", "Zod", "React hook form"],
            },
          ],
        },
        { label: "Back-end", itens: [] },
        {
          label: "Fullstack",
          itens: [],
        },
        { label: "Diversos", itens: [] },
      ],
    };
  },
  computed: {
    totalProjects() {
      let total = this.projectItems.reduce((acc, current) => {
        return acc + current.itens.length;
      }, 0);

      return total;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-item-group.theme--light.v-tabs-items {
  height: 50%;
  overflow: hidden;
}
.section-projects {
  &__container--show {
    mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);

    overflow: hidden;

    position: relative;

    height: 700px;
  }

  &__button {
    position: absolute;
    bottom: 0px;
    left: 51%;
    transform: translateX(-50%);
    text-transform: none;
  }

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
