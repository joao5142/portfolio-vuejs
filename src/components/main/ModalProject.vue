<template>
  <v-dialog v-model="getIsModalOpen" persistent max-width="800">
    <div class="position-relative">
      <v-img :src="project?.image ?? ''" class="pa-4" min-height="300px">
        <div class="d-flex justify-end">
          <v-btn
            @click="$emit('close-modal')"
            class="ms-3"
            small
            fab
            color="#FF3C3C"
          >
            <v-icon color="#fff"> mdi-close </v-icon>
          </v-btn>
        </div>
      </v-img>
      <div class="modal">
        <div class="modal__content">
          <div class="mt-6">
            <h4>{{ project?.title }}</h4>
            <div class="modal__line"></div>
            <h5 class="mt-10 pb-2">Sobre o projeto</h5>
            <p class="mt-3">
              {{ project?.description }}
            </p>
            <h5 class="mt-8 pb-2">Tecnologias e Conhecimentos</h5>
            <ul class="d-flex flex-wrap mt-3">
              <li
                v-for="(technologie, index) in project?.technologies"
                :key="index + 'technologie'"
              >
                {{ technologie }}
              </li>
            </ul>

            <v-btn
              v-if="project.url"
              class="me-3 mt-10"
              dark
              rounded
              color="#36B7FF"
              @click="viewProject"
              >Acessar site</v-btn
            >
            <v-btn
              class="me-3 mt-10"
              dark
              rounded
              color="#36B7FF"
              @click="viewGithub"
              >Acessar github</v-btn
            >
          </div>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: "ModalPadrao",
  emits: ["closeModal"],
  props: {
    modalOpen: {
      type: Boolean,
      validator: (value) => value === true || value === false,
    },
    project: {
      type: Object,
    },
  },
  methods: {
    closeModal() {
      console.log("Close Modal");
      this.funcCloseModal();
    },
    viewProject() {
      window.open(this.project.url, "_blank");
    },
    viewGithub() {
      window.open(this.project.github, "_blank");
    },
  },
  computed: {
    getIsModalOpen() {
      return this.modalOpen;
    },
  },

  mounted() {},
};
</script>
<style scoped lang="scss">
.modal {
  background-color: #fff;
  padding: 10px;
  padding-bottom: 30px;

  ul {
    padding: 0px;
  }

  li {
    margin: 0px 20px;
  }
  &__content {
    padding: 20px;
  }
  @media (max-width: 500px) {
    & {
      ul {
        flex-direction: column;
      }
    }
  }

  .btn-close {
    position: absolute;
    right: 20px;
    top: 20px;
    padding: 15px;
    background-color: transparent;
    border: 1px solid #4f4f4f;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__line {
    border-bottom: 1px solid #f3f3f3;
  }
}
</style>
