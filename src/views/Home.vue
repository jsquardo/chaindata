<template>
  <div class="home">
    <CryptoList />
  </div>
</template>

<script>
// @ is an alias to /src
import CryptoList from "../components/CryptoList";

export default {
  name: "Home",
  components: {
    CryptoList
  }
};
</script>
