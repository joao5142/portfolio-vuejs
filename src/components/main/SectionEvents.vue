<template>
  <section class="section-events container">
    <h3 class="text-center mb-15">Eventos e Apresentações</h3>

    <div class="section-events__container-events" v-dragscroll>
      <div class="d-flex">
        <img
          v-for="(event, index) in eventsItems"
          :key="'event-' + index"
          class="section-events__image"
          :alt="event.description"
          :src="event.url"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionEvents",
  data() {
    return {
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
          description: "Evento 4",
          url: "https://img.freepik.com/fotos-gratis/orador-afro-americano-feminino-dando-apresentacao-no-salao-na-oficina-da-universidade_155003-3581.jpg?t=st=1662830961~exp=1662831561~hmac=7174eef48c7a4742f8e23fb01efad86e273659557f7a94f9a55a161ebcb35537",
        },
        {
          description: "Evento 5",
          url: "https://img.freepik.com/fotos-gratis/orador-afro-americano-feminino-dando-apresentacao-no-salao-na-oficina-da-universidade_155003-3581.jpg?t=st=1662830961~exp=1662831561~hmac=7174eef48c7a4742f8e23fb01efad86e273659557f7a94f9a55a161ebcb35537",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.section-events {
  &__container-events {
    width: auto;
    display: flex;

    margin: 0 auto;

    cursor: grab;

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
</style>
