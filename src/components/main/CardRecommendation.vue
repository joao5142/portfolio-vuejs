<template>
  <div
    class="recommendation"
    aria-label="Recommendation"
    :class="{ 'recommendation--blue': featured }"
  >
    {{ recommendation.message }}

    <div
      class="recommendation__box-avatar d-flex flex-column align-center justify-center"
    >
      <div class="recommendation__avatar">
        <img :src="recommendation.avatar" alt="avatar" />
      </div>
      <h3 class="recommendation__name">{{ recommendation.name }}</h3>
      <p class="recommendation__position">{{ recommendation.position }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardRecommendation",
  props: {
    featured: {
      type: Boolean,
    },
    recommendation: {},
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.recommendation {
  padding: 50px;
  background: $gray-1;

  border-radius: 10px;
  position: relative;

  &--blue {
    background: $blue-3;
    color: white;
    margin-top: -80px;

    @media (max-width: 996px) {
      margin-top: 0px;
    }
  }

  &__avatar {
    width: 50px;
    height: 50px;

    background-size: cover;

    border-radius: 50%;

    img {
      object-fit: cover;
      max-width: 100%;
      height: 100%;
      border-radius: inherit;
    }
  }
  &__box-avatar {
    position: absolute;
    width: 100%;
    left: 50%;
    bottom: -90px;
    transform: translateX(-50%);

    h3 {
      font-size: 1rem;
      color: $blue-5;
      font-weight: 700;
    }
    p {
      color: $gray-8;
      font-weight: 500;
      font-size: 0.8rem;
    }
  }
}

@media (max-width: 400px) {
  .recommendation {
    padding: 50px 10px;
  }
}
</style>
