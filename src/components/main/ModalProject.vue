<template>
  <v-dialog v-model="getIsModalOpen" persistent max-width="800">
    <div class="modal card-aluno-default position-relative">
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
      <div class="modal__content">
        <div class="mt-6">
          <h4>Titulo</h4>
          <div class="modal__line"></div>
          <h5 class="mt-10 pb-2">Sobre o projeto</h5>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <h5 class="mt-10 pb-2">Minhas Funções</h5>
          <ul class="d-flex">
            <div class="me-10" role="group">
              <li>Função 1</li>
              <li>Função 2</li>
            </div>
            <div role="group">
              <li>Função 3</li>
              <li>Função 4</li>
            </div>
          </ul>

          <h5 class="mt-10 pb-2">Equipe</h5>
          <div class="mt-2">
            <v-row>
              <v-col v-for="item in 6" :key="'avatar' + item" cols="3">
                <div class="d-flex align-center">
                  <v-avatar size="35">
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                      class="me-2"
                    />
                  </v-avatar>
                  @dayvison
                </div>
              </v-col>
            </v-row>
          </div>
          <h5 class="mt-10 pb-2">Quem Acesssa</h5>
          <ul class="d-flex">
            <div role="group" class="me-10">
              <li>Professores</li>
              <li>Alunos</li>
            </div>
            <div role="group">
              <li>Professores</li>
              <li>Alunos</li>
            </div>
          </ul>

          <h5 class="mt-10 pb-2">Ver Projeto</h5>

          <v-btn class="me-3" dark rounded color="#36B7FF">Acessar web</v-btn>
          <v-btn dark rounded color="#36B7FF">Acessar mobile</v-btn>
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
  },
  methods: {
    closeModal() {
      console.log("Close Modal");
      this.funcCloseModal();
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

  p,
  li {
  }
  &__content {
    padding: 20px;
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
