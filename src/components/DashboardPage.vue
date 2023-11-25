<script setup>
import "../assets/dashboard.scss";
import HorizontalCams from "./HorizontalCams.vue";
import VerticalCams from "./VerticalCams.vue";
import TopPill from "../components/TopPill.vue";
import { ref } from "vue";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");
socket.connect();
let perc = ref("");
socket.on("perc", (data) => {
  perc.value = data["data"];
});

function handleClick() {
  socket.emit("getperc");
}

socket.onAny((event, args) => {
  console.log(event);
  console.log(args);
});
</script>

<template>
  <div class="dashboard-container">
    <!-- <div class="pool-title-container"></div> -->
    <TopPill />
    <div class="pool-warning">ALERT</div>
    <div class="main-pool-container">
      <div class="horizontal-abs-cams-left">
        <HorizontalCams />
      </div>
      <div class="horizontal-abs-cams-right">
        <HorizontalCams alertColor="red" alertBorder="black" />
      </div>
      <div class="vertical-abs-cams-top">
        <VerticalCams />
      </div>
      <div class="vertical-abs-cams-bottom">
        <VerticalCams alertColor="red" alertBorder="black" />
      </div>
      <div class="pool-rectangle">
        <div class="grid-design">
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
        </div>
      </div>
    </div>
    <div class="bottom-nav">
      <input type="checkbox" id="slider" class="toggle" />
      <label for="slider" class="slider-container">
        <div class="ball"></div>
      </label>
    </div>
    <div class="confidence-level">{{ perc }}</div>
    <button @click="handleClick">Click</button>
  </div>
</template>
