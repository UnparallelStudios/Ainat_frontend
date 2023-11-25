<script setup>
import "../assets/card.scss";
</script>

<template>
  <div class="card">
    <div class="card-header">
      <div class="logo"><i class="ri-drop-line"></i></div>
      <div class="title-section">
        <div class="title">PH Level</div>
        <div class="subtitle">this show the ph level of the pool</div>
      </div>
    </div>
    <div class="inner-card">
      <div class="rightside">
        <p class="value">7 <span class="unit">pH</span></p>
      </div>
      <div class="leftside">
        <p>looks good</p>
      </div>
    </div>
  </div>
</template>
