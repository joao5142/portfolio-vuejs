<template>
  <div
    v-if="modalOpened"
    ref="modal"
    class="modal"
    tabindex="0"
    @keyup.esc="$emit('close-modal')"
    @click.self="$emit('close-modal')"
  >
    <v-icon
      @click="$emit('close-modal')"
      color="white"
      class="modal__icon-close"
      >mdi-close</v-icon
    >

    <img class="modal__image" :src="url" alt="Visualização da Imagem" />
  </div>
</template>

<script>
export default {
  name: "ModalShowImage",
  components: {},
  props: {
    opened: {
      type: Boolean,
    },
    url: {
      type: String,
    },
  },

  emits: ["close-modal"],
  computed: {
    modalOpened() {
      return this.opened;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.8);

  &__image {
    min-width: 200px;
    max-width: 600px;

    max-height: 500px;

    margin: 0 30px;
  }
  &__icon-close {
    position: absolute;
    top: 50px;
    right: 50px;
    z-index: 110;
  }
}
</style>
