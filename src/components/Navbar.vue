<template name="Navbar">
  <div class="underline">
    <b-navbar wrapper-class="container">
      <template slot="brand">
        <b-navbar-item
          tag="router-link"
          :to="{ path: '/' }"
        >
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template slot="start"></template>

      <template slot="end">
        <b-navbar-item tag="div">
          <b-navbar-item href="#">Home</b-navbar-item>
          <b-navbar-item href="#">Documentation</b-navbar-item>
          <b-navbar-dropdown label="Info">
            <b-navbar-item href="#">About</b-navbar-item>
            <b-navbar-item href="#">Contact</b-navbar-item>
          </b-navbar-dropdown>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss">
.underline {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
