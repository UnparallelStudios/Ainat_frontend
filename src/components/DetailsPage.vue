<script setup>
import "../assets/detailspage.scss";
import Card from "./Card.vue";
import PoolCard from "./PoolCard.vue";
</script>

<template>
  <div class="container">
    <div class="back-menu">
      <div class="back-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
          ></path>
        </svg>
      </div>
      <div class="name-of-pool"></div>
    </div>
    <div class="details-page-header">
      <p>Pool Data</p>
    </div>
    <div class="cards-container">
      <Card />
      <PoolCard />
    </div>
  </div>
</template>
