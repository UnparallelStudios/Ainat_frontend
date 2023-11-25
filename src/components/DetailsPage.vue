<script>
import "../assets/detailspage.scss";
import Card from "./Card.vue";
import PoolCard from "./PoolCard.vue";
import { state } from "@/socket";

export default {
  name: "DetailsPage",
  components: {
    Card,
    PoolCard,
  },
  computed: {
    connected() {
      return state.connected;
    },

    myResponseData() {
      return state.myResponseData;
    },

    tempdata() {
      return state.tempdata;
    },
  },
};
</script>

<template>
  <div class="container">
    <!-- <h1>{{ myResponseData }}</h1> -->
    <div class="back-menu">
      <router-link to="/dash">
        <div class="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
            ></path>
          </svg>
        </div>
      </router-link>
      <div class="name-of-pool"></div>
    </div>
    <div class="details-page-header">
      <p>Pool Data</p>
    </div>
    <div class="cards-container">
      <Card />
      <PoolCard :chlorine="tempdata" />
    </div>
  </div>
</template>
