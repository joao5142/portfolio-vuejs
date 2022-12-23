<template>
  <footer>
    <div class="container">
      <h3>Vamos Bater um Papo!</h3>

      <v-row class="mt-15">
        <v-col md="6">
          <form class="form" @submit.prevent action="">
            <input
              class="form__field"
              placeholder="Informe seu email"
              type="email"
              name=""
              id=""
            />
            <textarea
              class="form__field"
              placeholder="Digite aqui a mensagem que você deseja enviar"
            >
            </textarea>

            <button class="form__button" type="submit">Enviar</button>
          </form>
        </v-col>
        <v-col md="6" class="d-flex align-center">
          <v-img src="/static/cell-phone.svg" />
        </v-col>
      </v-row>

      <div aria-describedby="Informações para contato" class="mt-10">
        <h4 class="text-center">joão.teste@example.com</h4>

        <div
          class="socials-container"
          aria-describedby="Redes Sociais"
          role="navigation"
        >
          <a href="" title="Linkedin Icone">
            <linkedin-icon color="#fff" />
          </a>
          <a href="" title="Email Icone">
            <email-icon color="#fff" />
          </a>
          <a href="" title="Facebook Icone">
            <facebook-icon color="#fff" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import EmailIcon from "../icons/EmailIcon.vue";
import FacebookIcon from "../icons/FacebookIcon.vue";
import LinkedinIcon from "../icons/LinkedinIcon.vue";
export default {
  name: "AppFooter",
  components: { EmailIcon, FacebookIcon, LinkedinIcon },
};
</script>

<style lang="scss" scoped>
footer {
  background: $blue-dark;
  color: white;
  padding: 60px 0px 20px 0px;
}

.form {
  textarea {
    height: 200px;
    resize: none;
    @include customScroll($blue-2);
  }
  &__field {
    display: block;
    width: 100%;
    max-width: 500px;
    background-color: rgba(255, 255, 255, 0.04);
    border-radius: $border-radius;
    padding: 18px 20px;
    margin-bottom: 40px;
    color: $gray-4;

    &:focus {
      outline: 0px;
    }
    &::placeholder {
      color: $gray-4;
    }
  }
  &__button {
    background-color: $blue-3;
    border-radius: 40px;
    padding: 10px 60px;
  }
}

.socials-container {
  display: flex;
  margin-top: 15px;
  gap: 20px;
  justify-content: center;
}

@media (max-width: 400px) {
  h4 {
    font-size: 1.2rem;
  }
}
</style>
