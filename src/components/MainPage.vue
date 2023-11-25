<script>
import "../assets/mainpage.scss";
import { state } from "@/socket";

export default {
  name: "MainPage",
  methods: {
    timeStamp() {
      const today = new Date();
      const time = today.getHours() + ":" + today.getMinutes();
      return time;
    },

    test() {
      console.log("print");
    },
  },

  computed: {
    connected() {
      console.log(state.connected);
      return state.connected;
    },

    myResponseData() {
      return state.myResponseData;
    },
  },
};
</script>

<template>
  <div class="mainpage-container">
    <div class="inner-container">
      <div class="main-navbar">{{ timeStamp() }}<a>Pool</a><a>FAQs</a></div>
      <div class="services"></div>
      <div @click="test" class="pool-a-container">
        <div class="pool-a">
          <div class="name-container">Pool A</div>
          <div class="pool-a-body">
            <div class="grid-item">Dimensions: 50mx25m</div>
            <div class="grid-item">Water Quality: Healthy</div>
            <div class="grid-item-alert relative">
              <div class="absolute" v-if="connected">Safe</div>
              <div class="absolute danger" v-else>Danger</div>
            </div>
          </div>
        </div>
        <div class="pool-a-percent">
          <div class="circle-percent-1"></div>
          <div class="circle-percent-2"></div>
          <div class="percentage">80%</div>
          <div class="pool-a-health">Pool Health</div>
        </div>
      </div>
      <div class="pool-bc-container">
        <div class="pool-bc">
          <div class="name-container">Pool B</div>
          <div class="pool-bc-body">
            <div class="grid-item">Dimensions: 50mx25m</div>
            <div class="grid-item">Water Quality: Healthy</div>
            <div class="grid-item-alert"></div>
          </div>
        </div>
        <div class="pool-bc">
          <div class="name-container">Pool C</div>
          <div class="pool-bc-body">
            <div class="grid-item">Dimensions: 50mx25m</div>
            <div class="grid-item">Water Quality: Healthy</div>
            <div class="grid-item-alert"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
