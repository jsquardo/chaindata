<template name="DetailPage">
  <div class="container mt-2 plr-4">
    <div class="coin_header">
      <IconCrypto
        :coinname="data.symbol"
        format="svg"
      />
      <div class="coin_name">
        <h1 class="is-size-4 lh-1">{{ data.name }}</h1>
        <h1 class="is-size-4 lh-1">{{ data.symbol.toUpperCase() }}</h1>
      </div>
      <div class="price">
        <h1 class="is-size-3">{{ data.market_data.current_price.usd | currency }}</h1>
      </div>
    </div>
    <div class="coin_information mt-1">
      <read-more
        more-str="read more"
        :text="data.description.en"
        link="#"
        less-str="read less"
        :max-chars="300"
      ></read-more>
    </div>
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

<style lang="scss" scoped>
img {
  margin-right: 1rem;
}

.coin_header {
  display: flex;
  align-items: center;
}

.coin_name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin-right: auto;
}

.lh-1 {
  line-height: 1;
  font-weight: 700;
}

.coin_header > img {
  height: 3rem;
}

.coin_information {
  text-align: left;
  width: 75%;

  &a {
    line-height: 1em;
    letter-spacing: 0.06em;
    font-family: "Lato", sans-serif;
    font-weight: normal;
    font-size: 16px;
    text-decoration: none;
    color: #fff;
    background: #231f20;
    display: inline-block;
    padding: 15px 12px 15px 15px;
    transition: background 200ms;
    border-radius: 4px;
  }
}
</style>