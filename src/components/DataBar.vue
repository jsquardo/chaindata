<template name="DataBar" class="">
  <div class="underline">
    <div class="container">
      <div class="data_bar container">
        <div class="data_point">
          Cryptocurrencies: <span class="data">{{ globalData.cryptocurrencies_number | number('0,0') }}</span>
        </div>
        <div class="data_point">
          Market Cap: <span class="data">{{ globalData.market_cap_usd | currency }}</span>
        </div>
        <div class="data_point">
          Bitcoin Dominance: <span class="data">{{ globalData.bitcoin_dominance_percentage | percent }}</span>
        </div>
        <div class="data_point">
          24h Volume: <span class="data">{{ globalData.volume_24h_usd | number('0,0') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DataBar",
  data() {
    return {
      globalData: []
    };
  },
  mounted() {
    axios
      .get("https://api.coinpaprika.com/v1/global")
      .then(response => (this.globalData = response.data));
  }
};
</script>

<style lang="scss">
.underline {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.data_bar {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  // width: 75%;
  font-size: 0.9em;
  font-family: "Baloo Thambi 2", cursive;
  padding-top: 0.5rem;
}

.data_point {
  margin-right: 2rem;
}

.data {
  color: #f73859;
}
</style>