<template name="DetailPage">
  <div>
    {{ data.symbol }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DetailPage",
  props: {
    coinId: String
  },
  data() {
    return {
      id: this.coinId,
      data: []
    };
  },
  mounted() {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${this.id}?localization=false&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
      )
      .then(response => (this.data = response.data));
  }
};
</script>