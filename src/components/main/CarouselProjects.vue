<template>
  <div class="carousel">
    <img
      class="carousel__image"
      :src="photos[selectedPhotoIndex]"
      v-if="showPhoto"
    />

    <div class="carousel__bullets">
      <div
        class="carousel__bullet"
        :class="{ '--active': index == selectedPhotoIndex }"
        v-for="(bullet, index) in photos.length"
        :key="'bullet' + index"
      ></div>
    </div>
    <v-icon size="45" class="carousel__chevron-left" @click="getPreviusPhoto">
      mdi-chevron-left
    </v-icon>
    <v-icon size="45" class="carousel__chevron-right" @click="getNextPhoto">
      mdi-chevron-right
    </v-icon>
  </div>
</template>

<script>
export default {
  name: "CarouselProjects",
  data() {
    return {
      carouselInterval: null,
      isChevronClicked: false,
      selectedPhotoIndex: 0,
      showPhoto: true,
      photos: [
        "/static/projetos/1.png",
        "/static/projetos/2.png",
        "/static/projetos/3.png",
        "/static/projetos/4.png",
        "/static/projetos/5.png",
        "/static/projetos/6.png",
      ],
    };
  },
  methods: {
    async getPreviusPhoto() {
      this.setCarouselAction(() => {
        if (this.selectedPhotoIndex <= 0) {
          this.selectedPhotoIndex = this.photos.length - 1;
        } else {
          this.selectedPhotoIndex -= 1;
        }
      });
    },
    async getNextPhoto() {
      this.setCarouselAction(() => {
        if (this.selectedPhotoIndex >= this.photos.length - 1) {
          this.selectedPhotoIndex = 0;
        } else {
          this.selectedPhotoIndex += 1;
        }
      });
    },
    async setCarouselAction(callback) {
      this.isChevronClicked = true;
      this.showPhoto = false;
      this.removeCarouselInterval();

      callback();
      await this.$nextTick();
      this.isChevronClicked = false;
      this.setCarouselInterval();
      this.showPhoto = true;
    },
    setCarouselInterval() {
      this.carouselInterval = setInterval(() => {
        if (!this.isChevronClicked) {
          this.getNextPhoto();
        }
      }, 5500);
    },
    removeCarouselInterval() {
      clearInterval(this.carouselInterval);
    },
  },
  created() {
    this.setCarouselInterval();
  },
};
</script>

<style lang="scss" scoped>
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
} */
.carousel {
  border-radius: $border-radius;
  width: 400px;
  height: 244px;
  position: relative;
  &__image {
    object-fit: fill;

    border-radius: inherit;
    transition: all 0.7s ease-in-out;
    min-height: 100%;
    max-width: 100%;
  }

  &__bullets {
    position: absolute;
    bottom: -25px;
    display: flex;
    gap: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
  &__bullet {
    width: 10px;
    height: 10px;
    background-color: $gray-4;
    border-radius: 50%;
  }
  &__bullet.--active {
    background-color: $blue-4;
  }

  &__chevron-right,
  &__chevron-left {
    color: $blue-4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  &__chevron-right {
    right: -40px;
  }
  &__chevron-left {
    left: -40px;
  }

  @media (max-width: 400px) {
    & {
      width: 90%;
      height: 150px;
    }
  }
}
</style>
