<script setup>
import "../assets/loginpage.scss";
import { ref } from "vue";

const username = ref("");
const password = ref("");

function onUsername(e) {
  username.value = e.target.value;
}

function onPassword(e) {
  password.value = e.target.value;
}

function formValidate() {
  console.log(username.value, password.value);
}
</script>

<template>
  <div class="loginpage-container">
    <div class="ainat-title">AINAT</div>
    <div class="login-container">
      <form class="login-form">
        <input
          :value="username"
          @input="onUsername"
          placeholder="Username"
          type="text"
        />
        <input
          :value="password"
          @input="onPassword"
          placeholder="Password"
          type="text"
        />
        <button @click="formValidate" type="button">Login!</button>
      </form>
    </div>
  </div>
</template>
