<template name="CryptoList">
  <div class="container">
    <b-table
      :data="coinData"
      :paginated="isPaginated"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :pagination-simple="isPaginationSimple"
      :default-sort="defaultSort"
    >
      <template slot-scope="coinData">
        <b-table-column
          field="id"
          label="ID"
          width="40"
          sortable
          numeric
        >
          {{  coinData.row.market_cap_rank }}
        </b-table-column>
        <b-table-column
          field="name"
          label="Coin Name"
          sortable
        >
          {{ coinData.row.name }}
        </b-table-column>
        <b-table-column
          field="market_cap"
          label="MarketCap"
          sortable
        >
          {{ coinData.row.market_cap | number('0,0') }}
        </b-table-column>
        <b-table-column
          field="current_price"
          label="Price"
          sortable
        >
          {{ coinData.row.current_price | currency }}
        </b-table-column>
        <b-table-column
          field="volume"
          label="Volume (24h)"
          sortable
        >
          {{ coinData.row.total_volume | currency }}
        </b-table-column>
        <b-table-column
          field="total_supply"
          label="Circulating Supply"
          sortable
        >
          {{ coinData.row.circulating_supply | number('0,0') }}
        </b-table-column>
        <b-table-column
          field="price_change_percentage_24h_in_currency"
          label="Change (24h)"
          sortable
        >
          {{ coinData.row.price_change_percentage_24h_in_currency | percent }}
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CryptoList",
  data() {
    return {
      coinData: [],
      isPaginated: true,
      isPaginationSimple: false,
      defaultSort: ["rank", "asc"],
      defaultSortDirection: "asc",
      currentPage: 1,
      perPage: 50
    };
  },
  mounted() {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250"
      )
      .then(response => (this.coinData = response.data));
  }
};
</script>