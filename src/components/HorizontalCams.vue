<script>
import "../assets/horizontalcams.scss";

export default {
  props: {
    alertColor: String,
    alertBorder: String,
  },
  methods: {
    buttonPress() {
      console.log("works");
    },
  },
};
</script>

<template>
  <div class="horizontal-cam-grid">
    <div class="grid-item"><button></button></div>
    <div class="grid-item"><button></button></div>
    <div class="grid-item"><button></button></div>
    <div class="grid-item"><button></button></div>
    <div class="grid-item"><button></button></div>
    <div class="grid-item">
      <button
        :style="{ backgroundColor: alertColor, borderColor: alertBorder }"
        @click="buttonPress"
        type="button"
      ></button>
    </div>
  </div>
</template>
