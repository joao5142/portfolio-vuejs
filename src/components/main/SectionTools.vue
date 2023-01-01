<template>
  <section class="container section-tools">
    <h3 class="mb-10">Ferramentas e metodologias</h3>

    <div
      aria-label="Informações Adicionais - Legenda"
      role="complementary"
      class="d-flex justify-end mb-8"
    >
      <div>
        <h5 class="mb-2">Legenda</h5>
        <div role="contentInfo" class="d-flex flex-wrap">
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
</template>

<script>
import { toolsItems } from "@/mockData";

export default {
  data() {
    return {
      selectedTabTools: 0,
      toolsItems,
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
