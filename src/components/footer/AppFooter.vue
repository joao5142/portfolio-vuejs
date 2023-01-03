<template>
  <footer>
    <div class="container">
      <h3>Vamos Bater um Papo!</h3>

      <v-row class="mt-15 mb-15 mb-md-0">
        <v-col cols="12" md="6">
          <form ref="form" class="form" @submit.prevent="sendEmail">
            <input
              class="form__field"
              placeholder="Informe seu email"
              type="email"
              name="user_email"
              v-model="email"
            />
            <textarea
              class="form__field"
              placeholder="Digite aqui a mensagem que você deseja enviar"
              name="message"
              id="message"
              v-model="message"
            >
            </textarea>

            <button class="form__button" type="submit">Enviar</button>
          </form>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="d-none d-md-flex align-center"
          title="Imagem Celular"
        >
          <img
            style="max-width: 100%"
            src="/static/cell-phone.svg"
            alt="cellphone"
          />
        </v-col>
      </v-row>

      <div aria-label="Informações para contato" class="mt-10">
        <h4 class="text-center">joaopauloneto3687@gmail.com</h4>

        <div
          class="socials-container"
          aria-label="Redes Sociais"
          role="navigation"
        >
          <a
            title="Linkedin Icone"
            href="https://linkedin.com/in/joão-paulo-8b38b8254"
            target="_blank"
          >
            <linkedin-icon color="#fff" />
          </a>
          <a
            title="Email Icone"
            href="mailto:joaopauloneto3687@gmail.com"
            target="_blank"
          >
            <email-icon color="#fff" />
          </a>
          <a
            href="https://linkedin.com/in/joão-paulo-8b38b8254"
            target="_blank"
            title="Facebook Icone"
          >
            <facebook-icon color="#fff" />
          </a>
        </div>
      </div>
    </div>
    <Loading :is-loading="isLoading" />
  </footer>
</template>

<script>
import EmailIcon from "../icons/EmailIcon.vue";
import FacebookIcon from "../icons/FacebookIcon.vue";
import LinkedinIcon from "../icons/LinkedinIcon.vue";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Loading from "../loading/Loading.vue";

const emailPublicKey = process.env.VUE_APP_EMAIL_KEY;
const emailServiceId = process.env.VUE_APP_EMAIL_SERVICE_ID;
const emailTemplateId = process.env.VUE_APP_EMAIL_TEMPLATE_ID;

export default {
  name: "AppFooter",
  components: { EmailIcon, FacebookIcon, LinkedinIcon, Loading },

  data() {
    return {
      email: "",
      message: "",
      isLoading: false,
    };
  },

  methods: {
    clearFormEmail() {
      this.email = "";
      this.message = "";
    },
    async sendEmail() {
      console.log(emailPublicKey, emailServiceId);
      try {
        this.isLoading = true;

        let response = await emailjs.sendForm(
          emailServiceId,
          emailTemplateId,
          this.$refs.form,
          emailPublicKey
        );
        if (response.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Mensagem Enviada !",
            text: "Sucesso ao enviar mensagem",
          });

          this.clearFormEmail();
        }
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo  deu errado! Tente novamente mais tarde.",
        });
      }
      this.isLoading = false;
    },
  },
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

@media (max-width: 450px) {
  h4 {
    font-size: 1rem;
  }
}
</style>
