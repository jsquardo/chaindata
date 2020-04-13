<template>
  <div id="app">
    <DataBar />
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import DataBar from "./components/DataBar";
import Navbar from "./components/Navbar";

export default {
  components: {
    DataBar,
    Navbar
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
