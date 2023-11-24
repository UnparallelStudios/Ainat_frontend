<script>
import "../assets/horizontalcams.scss";

export default {
  props: {
    alertColor: String,
    alertBorder: String,
  },
};
</script>

<template>
  <!-- <div class="container"> -->
  <div class="horizontal-cam-grid">
    <div class="grid-item"><button></button></div>
    <div class="grid-item"><button></button></div>
    <div class="grid-item"><button></button></div>
    <div class="grid-item"><button></button></div>
    <div class="grid-item"><button></button></div>
    <div class="grid-item">
      <button
        :style="{ backgroundColor: alertColor, borderColor: alertBorder }"
      ></button>
    </div>
  </div>
  <!-- </div> -->
</template>
