<template name="CryptoList" class="crypto_list">
  <div class="container flex">
    <div class="is-size-3 has-text-weight-semibold mb-2 mt-2">
      Top Cryptocurrencies by Market Cap
    </div>
    <div class="flex">
      <b-table
        :data="coinData"
        :paginated="isPaginated"
        :per-page="perPage"
        :current-page.sync="currentPage"
        :pagination-simple="isPaginationSimple"
        :default-sort="defaultSort"
        :narrowed="isNarrowed"
      >
        <template slot-scope="coinData">
          <b-table-column
            field="id"
            label="ID"
            width="20"
            sortable
            numeric
          >
            {{  coinData.row.market_cap_rank }}
          </b-table-column>
          <b-table-column
            field="name"
            label="Coin Name"
            width="200"
            sortable
          >
            <span class="icon_name"><img
                class="small_logo"
                :src="coinData.row.image"
                alt=""
              >
              <router-link :to="{name: 'detail', params: {coinId: coinData.row.id}}"> {{ coinData.row.name }} </router-link>
            </span>
          </b-table-column>
          <b-table-column
            field="market_cap"
            label="MarketCap"
            sortable
          >
            {{ coinData.row.market_cap | currency }}
          </b-table-column>
          <b-table-column
            field="current_price"
            label="Price"
            sortable
          >
            <span class="blue">{{ coinData.row.current_price | currency }}</span>
          </b-table-column>
          <b-table-column
            field="volume"
            label="Volume (24h)"
            sortable
          >
            <span class="blue">{{ coinData.row.total_volume | currency }}</span>
          </b-table-column>
          <b-table-column
            field="total_supply"
            label="Circulating Supply"
            width="200"
            sortable
          >
            {{ coinData.row.circulating_supply | number('0,0') }}
          </b-table-column>
          <b-table-column
            label="24 Change"
            field="price_change_percentage_24h_in_currency"
            centered
          >
            <span :class="['tag', {'is-danger': coinData.row.price_change_percentage_24h < 0 },{'is-success': coinData.row.price_change_percentage_24h >= 0}
            ]"> {{ coinData.row.price_change_percentage_24h | number('0.00')}}%</span>
          </b-table-column>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CryptoList",
  data() {
    return {
      coinData: [],
      sparklineData: [],
      isPaginated: true,
      isPaginationSimple: false,
      defaultSort: ["rank", "asc"],
      defaultSortDirection: "asc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      currentPage: 1,
      perPage: 50,
      isNarrowed: false
    };
  },
  mounted() {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&sparkline=true&price_change_percentage=24h"
      )
      .then(response => (this.coinData = response.data));
  }
};
</script>

<style lang="scss">
.blue {
  font-family: "Baloo Thambi 2", cursive;
  font-weight: 500;
  color: dodgerblue;
}

.b-table {
  font-family: "Noto Sans", sans-serif;
  font-size: 0.95rem;
}

.icon_name {
  display: flex;
  align-items: center;
}

.small_logo {
  height: 1.25rem;
  margin-right: 0.5rem;
}

.mb-2 {
  margin-bottom: 2rem;
}
.mt-2 {
  margin-top: 2rem;
}
.mw-90 {
  max-width: 90% !important;
}
</style>