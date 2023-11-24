<script setup>
import "./assets/app.scss";
import Card from "./components/Card.vue";
import DashboardPage from "./components/DashboardPage.vue";
import LoginPage from "./components/LoginPage.vue";
import PoolCard from "./components/PoolCard.vue";
import TopPill from "./components/TopPill.vue";
</script>

<template>
  <DashboardPage />
  <LoginPage />
  <Card />
  <PoolCard />
  <TopPill />
</template>
