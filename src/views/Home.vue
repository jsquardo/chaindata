<template>
  <div class="home">
    <DataBar />
    <Navbar />
    <CryptoList />
  </div>
</template>

<script>
// @ is an alias to /src
import DataBar from "../components/DataBar";
import Navbar from "../components/Navbar";
import CryptoList from "../components/CryptoList";

export default {
  name: "Home",
  components: {
    Navbar,
    DataBar,
    CryptoList
  }
};
</script>
