<template>
  <section class="section-events container">
    <h3 class="text-center mb-15">Eventos e Apresentações</h3>

    <div ref="slider" class="keen-slider">
      <img
        @click="
          selectedImage = event.url;
          isModalShowImageOpen = true;
        "
        v-for="(event, index) in eventsItems"
        :key="'event-' + index"
        class="section-events__image keen-slider__slide"
        :alt="event.description"
        :src="event.url"
      />
    </div>

    <ModalShowImage :opened="isModalShowImageOpen" @close-modal="isModalShowImageOpen = false" :url="selectedImage" />
  </section>
</template>

<script>
import ModalShowImage from "./ModalShowImage.vue";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";

export default {
  name: "SectionEvents",
  components: { ModalShowImage },
  data() {
    return {
      isModalShowImageOpen: false,
      selectedImage: null,
      eventsItems: [
        {
          description: "Evento 2",
          url: "/static/eventos/2.jpeg",
        },
        {
          description: "Evento 3",
          url: "/static/eventos/3.jpeg",
        },

        {
          description: "Evento 5",
          url: "/static/eventos/5.jpeg",
        },
        {
          description: "Evento 4",
          url: "/static/eventos/4.jpeg",
        },
      ],
    };
  },
  mounted() {
    this.slider = new KeenSlider(this.$refs.slider, {
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 1, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 3, spacing: 10 },
        },
      },
      slides: { perView: 1 },
    });
  },
  beforeDestroy() {
    if (this.slider) this.slider.destroy();
  },
};
</script>

<style lang="scss" scoped>
.section-events {
  &__image {
    display: block;
    height: 250px;

    object-fit: cover;

    border-radius: $border-radius;

    cursor: pointer;
  }
}
</style>
