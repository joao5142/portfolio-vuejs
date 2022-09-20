<template>
  <main>
    <section class="container">
      <v-row>
        <v-col md="6">
          <h3 data-aos="zoom-in" data-aos-delay="500" data-aos-duration="900">
            Sobre mim
          </h3>
          <p data-aos="zoom-in" data-aos-delay="500" data-aos-duration="900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </p>
        </v-col>
        <v-col md="6" class="d-flex justify-center">
          <carousel-about-me />
        </v-col>
      </v-row>
    </section>

    <section class="section-academic-life">
      <h3 data-aos="fade-right" data-aos-duration="900" class="text-center">
        Vida Acadêmica
      </h3>
      <div
        class="container section-academic-life__container-card d-flex"
        aria-describedby="Container Cards Vida Acadêmica"
        v-dragscroll
      >
        <div
          v-for="(i, index) in 3"
          :key="index"
          class="section-academic-life__card base-card"
        >
          <img src="/static/certificate.svg" alt="Icone Certificado" />
          <div aria-labelledby="Conteúdo Card" class="ps-2">
            <h4>titulo</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc v
            </p>
            <a href="">Ver grade</a>
          </div>
        </div>
      </div>
    </section>

    <section class="container section-projects">
      <h3 data-aos="fade-left" data-aos-duration="900">Projetos</h3>
      <p>Total de projetos: 15</p>
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
                cols="4"
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
                    width="100px"
                    height="100px"
                    src="https://img.freepik.com/free-vector/organizing-projects-concept-illustration_114360-542.jpg?w=826&t=st=1662774070~exp=1662774670~hmac=cb4fb4e56ada094d7172e1960a7ea7f680ec9299b0665a060aff360aa1d9c059"
                  ></v-img>

                  <div>
                    <h4>Titulo</h4>
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

    <section class="section-events">
      <h3
        data-aos="fade-right"
        data-aos-duration="900"
        class="text-center mb-10"
      >
        Eventos e Apresentações
      </h3>

      <div class="section-events__container-events" v-dragscroll>
        <div class="d-flex">
          <img
            v-for="(event, index) in eventsItems"
            :key="+'event' + index"
            class="section-events__image"
            :alt="event.description"
            :src="event.url"
          />
        </div>
      </div>
    </section>

    <section class="container section-tools">
      <h3 data-aos="fade-left" data-aos-duration="900">
        Ferramentas e metodologias
      </h3>

      <div
        aria-describedby="Informações Adicionais - Legenda"
        role="complementary"
        class="d-flex justify-end mb-5"
      >
        <div>
          <h5 class="mb-2">Legenda</h5>
          <div role="contentInfo" class="d-flex">
            <div class="d-flex">
              <div
                class="section-tools__legend-ball --green"
                title="Bola Legenda"
              ></div>
              Básico
            </div>
            <div class="d-flex mx-3">
              <div
                class="section-tools__legend-ball --orange"
                title="Bola Legenda"
              ></div>
              Intermédiario
            </div>
            <div class="d-flex">
              <div
                class="section-tools__legend-ball --red"
                title="Bola Legenda"
              ></div>
              Avançado
            </div>
          </div>
        </div>
      </div>

      <v-tabs v-model="selectedTabTools" align-with-title>
        <v-tab v-for="(tab, index) in toolsItems" :key="'projectTab' + index">
          {{ tab.label }}
        </v-tab>

        <v-tabs-items v-model="selectedTabTools">
          <v-tab-item
            v-for="(item, tabIndex) in toolsItems"
            :key="'itemTab' + tabIndex"
          >
            <v-row class="pa-4 section-tools__logos mt-2">
              <v-col
                class="d-flex align-center relative"
                md="4"
                lg="3"
                v-for="(logo, indexLogo) in item.itens"
                :key="'logo' + indexLogo"
              >
                <img
                  class="section-tools__logo"
                  :alt="logo.description"
                  :src="logo.url"
                  :style="{ 'max-height': logo.maxHeight || '30px' }"
                />
                <div
                  class="section-tools__legend-ball absolute"
                  :class="getStyleBallByLevel(logo)"
                  title="Bola Legenda"
                ></div>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </section>

    <ModalProject
      :modal-open="isModalProjectOpen"
      @close-modal="isModalProjectOpen = false"
    />
  </main>
</template>

<script>
import CarouselAboutMe from "./CarouselAboutMe.vue";
import ModalProject from "./ModalProject.vue";

export default {
  components: { CarouselAboutMe, ModalProject },
  data() {
    return {
      isModalProjectOpen: false,
      selectedTabProjects: 0,
      selectedTabTools: 0,
      projectItems: [
        {
          label: "Ensino Médio",
          itens: ["teste 123", "teste 123", "teste 123", "teste 123"],
        },
        { label: "Ensino Fundamental", itens: ["teste 123"] },
        { label: "Ensino Infantil", itens: ["teste 123"] },
        { label: "Diversos", itens: ["teste 123"] },
      ],
      eventsItems: [
        {
          description: "Evento 1",
          url: "https://img.freepik.com/fotos-gratis/palestrante-masculino-fazendo-apresentacao-no-corredor-do-workshop-da-universidade-publico-ou-sala-de-conferencias_155003-27419.jpg?w=1380&t=st=1662830961~exp=1662831561~hmac=70622df79f8c76b8b83e955029265517abe31a13e6ec87b5d381259387bbcdee",
        },
        {
          description: "Evento 2",
          url: "https://img.freepik.com/fotos-gratis/palestrante-masculino-fazendo-apresentacao-no-corredor-do-workshop-da-universidade-publico-ou-sala-de-conferencias_155003-27425.jpg?t=st=1662830961~exp=1662831561~hmac=08a6d38d3ec391e9880727c42233f3a41f39ef068de2cfc690fef05c249afc9f",
        },
        {
          description: "Evento 3",
          url: "https://img.freepik.com/fotos-gratis/orador-afro-americano-feminino-dando-apresentacao-no-salao-na-oficina-da-universidade_155003-3581.jpg?t=st=1662830961~exp=1662831561~hmac=7174eef48c7a4742f8e23fb01efad86e273659557f7a94f9a55a161ebcb35537",
        },
        {
          description: "Evento 3",
          url: "https://img.freepik.com/fotos-gratis/orador-afro-americano-feminino-dando-apresentacao-no-salao-na-oficina-da-universidade_155003-3581.jpg?t=st=1662830961~exp=1662831561~hmac=7174eef48c7a4742f8e23fb01efad86e273659557f7a94f9a55a161ebcb35537",
        },
        {
          description: "Evento 3",
          url: "https://img.freepik.com/fotos-gratis/orador-afro-americano-feminino-dando-apresentacao-no-salao-na-oficina-da-universidade_155003-3581.jpg?t=st=1662830961~exp=1662831561~hmac=7174eef48c7a4742f8e23fb01efad86e273659557f7a94f9a55a161ebcb35537",
        },
      ],
      toolsItems: [
        {
          label: "Ferramentas",
          itens: [
            {
              description: "ClickUp",
              url: "/static/ferramentas/clickup.png",
              level: "basic",
            },
            {
              description: "Data Studio",
              url: "/static/ferramentas/data-studio.png",
              level: "medium",
            },
            {
              description: "Discord",
              url: "/static/ferramentas/discord.png",
              level: "advanced",
            },
            {
              description: "Facebook Adwords",
              url: "/static/ferramentas/facebook-ads.png",
              maxHeight: "20px",
              level: "advanced",
            },
            {
              description: "Figma",
              url: "/static/ferramentas/figma.png",
              maxHeight: "50px",
              level: "advanced",
            },
            {
              description: "Google Adwords",
              url: "/static/ferramentas/google-ads.png",
              maxHeight: "35px",
              level: "basic",
            },
            {
              description: "Google Analytics",
              url: "/static/ferramentas/google-analytics.png",
              maxHeight: "35px",
              level: "basic",
            },
            {
              description: "Hotjar",
              url: "/static/ferramentas/hotjar.png",
              maxHeight: "25px",
              level: "medium",
            },
            {
              description: "Hubspot",
              url: "/static/ferramentas/hubspot.png",
              level: "basic",
            },
            {
              description: "Jira",
              url: "/static/ferramentas/jira.png",
              maxHeight: "20px",
              level: "medium",
            },
            {
              description: "Jmeter",
              url: "/static/ferramentas/Jmeter.png",
              level: "medium",
            },
            {
              description: "Microsoft Project",
              url: "/static/ferramentas/microsoft-project.png",
              level: "medium",
            },
            {
              description: "Microsoft Teams",
              url: "/static/ferramentas/microsoft-teams.png",
              maxHeight: "35px",
              level: "advanced",
            },
            {
              description: "Miro",
              url: "/static/ferramentas/miro.png",
              maxHeight: "40px",
              level: "advanced",
            },
            {
              description: "Selenium",
              url: "/static/ferramentas/selenium.png",
              level: "basic",
            },
            {
              description: "Slack",
              url: "/static/ferramentas/slack.png",
              maxHeight: "20px",
              level: "advanced",
            },
            {
              description: "Trello",
              url: "/static/ferramentas/trello.png",
              maxHeight: "20px",
              level: "advanced",
            },
            {
              description: "Youtube Studio",
              url: "/static/ferramentas/youtube-studio.png",
              maxHeight: "20px",
              level: "advanced",
            },
            {
              description: "Zendesk",
              url: "/static/ferramentas/zendesk.png",
              level: "advanced",
            },
          ],
        },

        {
          label: "Stack Tecnológico",
          itens: [
            {
              description: "Aws",
              url: "/static/stacks/aws.png",
              maxHeight: "45px",
              level: "medium",
            },
            {
              description: "Digital Ocean",
              url: "/static/stacks/digital-ocean.png",
              maxHeight: "40px",
              level: "medium",
            },
            {
              description: "Apple Store",
              url: "/static/stacks/apple-store.png",
              level: "basic",
            },
            {
              description: "HTML 5",
              url: "/static/stacks/html.png",
              level: "medium",
            },
            {
              description: "Bootstrap",
              url: "/static/stacks/bootstrap.png",
              level: "medium",
            },
            {
              description: "CSS",
              url: "/static/stacks/css.png",
              level: "medium",
            },
            {
              description: "Git Hub",
              url: "/static/stacks/github.png",
              level: "medium",
            },
            {
              description: "Git Lab",
              url: "/static/stacks/gitlab.png",
              maxHeight: "20px",
              level: "basic",
            },
            {
              description: "Google Cloud",
              url: "/static/stacks/google-cloud.png",
              maxHeight: "40px",
              level: "medium",
            },
            {
              description: "Google Play Store",
              url: "/static/stacks/google-play.png",
              maxHeight: "40px",
              level: "medium",
            },
            {
              description: "PHP",
              url: "/static/stacks/php.png",
              level: "basic",
            },
            {
              description: "Laravel",
              url: "/static/stacks/laravel.png",
              level: "basic",
            },
            {
              description: "Mysql",
              url: "/static/stacks/mysql.png",
              maxHeight: "40px",
              level: "medium",
            },
            {
              description: "Wordpress",
              url: "/static/stacks/wordpress.png",
              level: "advanced",
            },
          ],
        },
        {
          label: "Metodologias",
          itens: [
            {
              description: "Benchmark",
              url: "/static/metodologias/benchmark.png",
              level: "medium",
            },
            {
              description: "Matriz CSD",
              url: "/static/metodologias/matriz-csd.png",
              level: "medium",
            },
            {
              description: "Matriz Moscow",
              url: "/static/metodologias/moscow.png",
              level: "medium",
            },
            {
              description: "BPM",
              url: "/static/metodologias/bpm.png",
              level: "advanced",
            },
            {
              description: "NPS",
              url: "/static/metodologias/nps.png",
              level: "advanced",
            },
            {
              description: "OKR",
              url: "/static/metodologias/okr.png",
              level: "advanced",
            },
            {
              description: "Product Discovery",
              url: "/static/metodologias/product-discovery.png",
              level: "advanced",
            },
            {
              description: "Scrum",
              url: "/static/metodologias/scrum.png",
              level: "advanced",
            },
            {
              description: "SMART",
              url: "/static/metodologias/smart.png",
              level: "advanced",
            },
          ],
        },
      ],
    };
  },
  methods: {
    getStyleBallByLevel(logo) {
      if (logo.level == "basic") {
        return "--green";
      } else if (logo.level == "medium") {
        return "--orange";
      } else {
        return "--red";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  margin: 20px auto 100px auto;
}
.section-academic-life {
  background: $blue-dark;
  color: white;
  padding: 30px;

  &__container-card {
    margin-top: 50px;
    padding-bottom: 20px;
    gap: 100px;
    overflow-x: auto;
    @include customScroll($blue-1, "horizontal");
  }

  &__card {
    min-width: 400px;
    max-width: 400px;
    display: flex;
    align-items: center;

    img {
      width: 100px;
      height: 50px;
      object-fit: cover;
    }
  }
}
.section-projects {
  &__col-card {
    min-width: 400px;
    flex: 1;
    height: 229px;
  }
  &__card {
    border-radius: $border-radius;
    box-shadow: 0px 4px 4px #aeaeae;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    width: 100%;

    transition: all 0.1s ease-in-out;
    &:hover {
      border-bottom: 7px solid #002d40;
    }
  }
}
.section-events {
  &__container-events {
    width: auto;
    display: flex;

    width: 70%;
    margin: 0 auto;

    cursor: move;

    overflow-x: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }

    @media screen and(max-width:1200px) {
      & {
        justify-content: unset;
      }
    }
    @media screen and (min-width: 2836px) {
      justify-content: center;
    }

    &:active {
      cursor: grabbing;
    }
  }
  &__image {
    max-width: 400px;
    height: 250px;
    object-fit: fill;
    border-radius: $border-radius;
    margin-right: 20px;
    user-select: none;

    @media screen and(max-width:600px) {
      &:nth-of-type(1) {
        margin-left: 20px;
      }
      &:nth-last-of-type(1) {
        margin-right: 20px;
      }
    }
  }
}

.section-tools {
  .relative {
    position: relative;
  }
  &__legend-ball {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 4px;

    &.absolute {
      width: 8px;
      height: 8px;
    }
  }
  .--green {
    background-color: #69ffa5;
  }
  .--orange {
    background-color: #ffc369;
  }
  .--red {
    background-color: #ff6969;
  }

  &___logos {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 40px;
  }
  &__logo {
    max-width: 200px;
    max-height: 30px;
    display: flex;
    align-items: center;
    object-fit: cover;
    display: inline-block;
    margin-right: 15px;
  }
}
</style>
