<template>
  <section class="section-academic-life">
    <h3 class="text-center">Vida Acadêmica</h3>
    <div
      class="container section-academic-life__container-card d-flex"
      aria-describedby="Container Cards Vida Acadêmica"
      v-dragscroll
    >
      <div
        v-for="(i, index) in 3"
        :key="index"
        class="section-academic-life__card base-card"
      >
        <v-img
          max-width="70px"
          src="/static/certificate.svg"
          alt="Icone Certificado"
        />
        <div aria-labelledby="Conteúdo Card" class="ps-2">
          <h4>Título</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc v</p>
          <a href="">Ver grade</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.section-academic-life {
  background: $blue-dark;
  color: white;
  padding: 30px;

  &__container-card {
    cursor: grab;
    margin-top: 50px;
    padding-bottom: 20px;
    gap: 100px;
    overflow-x: auto;
    @include customScroll($blue-1, "horizontal");

    &:active {
      cursor: grabbing;
    }
  }

  &__card {
    min-width: 400px;
    max-width: 400px;
    display: flex;
    align-items: center;

    img {
      width: 100px;
      height: 50px;
      object-fit: cover;
    }

    &:first-child {
      margin-left: auto;
    }

    &:last-child {
      margin-right: auto;
    }
  }
}
</style>
