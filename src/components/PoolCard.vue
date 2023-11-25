<script setup>
import "../assets/poolcard.scss";
import { ref } from "vue";
// import { state } from "@/socket";
// import { socket } from "@/socket";
// export default {
//   name: "DetailsPage",
//   computed: {
//     connected() {
//       return state.connected;
//     },

//     myResponseData() {
//       return state.myResponseData;
//     },

//     tempdata() {
//       return state.tempdata;
//     },
//   },
//   mounted() {
//     // BAD
//     socket.on("my_response", (data) => {
//       console.log(data);
//     });
//   },
// };

import { io } from "socket.io-client";

const socket = io("http://localhost:5000");
socket.connect();
let temp = ref("");
socket.on("temp", (data) => {
  temp.value = data["data"];
});

socket.onAny((event, args) => {
  console.log(event);
  console.log(args);
});

function handleClick() {
  socket.emit("getdata");
}
</script>

<template>
  <div class="pool-card">
    <div class="card-topbar">
      <div>Pool temperature</div>
      <div><i class="ri-temp-hot-line"></i></div>
    </div>
    <div class="temp-container">
      <div>{{ temp }}&deg; C</div>
    </div>

    <!-- scale section  -->
    <div class="scale-wrapper">
      <div class="scale-pic">
        <div class="small"></div>
        <div class="big"></div>
        <div class="small"></div>
        <div class="dim bigger"></div>
        <div class="small"></div>
        <div class="big"></div>
        <div class="small"></div>
        <div class="dim bigger"></div>
        <div class="small"></div>
        <div class="big"></div>
        <div class="small"></div>
        <div class="bigger"></div>
        <div class="small"></div>
        <div class="big"></div>
        <div class="small"></div>
        <div class="dim bigger"></div>
        <div class="small"></div>
        <div class="big"></div>
        <div class="small"></div>
        <div class="dim bigger"></div>
        <div class="small"></div>
        <div class="big"></div>
        <div class="small"></div>
      </div>
    </div>
    <button @click="handleClick">Click</button>
  </div>
</template>
