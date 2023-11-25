<script setup>
import axios from "axios";
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
  axios
    .post("https://ainat-webserver.onrender.com/login", {
      Email: username.value,
      Password: password.value,
    })
    .then(async function (response) {
      if (response.status == 200) {
        console.log(response);
      } else {
        this.$router.push("/");
      }
    })
    .catch(function (error) {
      console.error(error.response);
    });
}
</script>

<template>
  <div class="loginpage-container">
    <div class="bg-color"></div>
    <div class="ainat-title">LOGIN</div>
    <div class="login-container">
      <form class="login-form">
        <input
          :value="username"
          @input="onUsername"
          placeholder="Email"
          type="text"
        />
        <input
          :value="password"
          @input="onPassword"
          placeholder="Password"
          type="text"
        />
        <router-link to="/"
          ><button @click="formValidate" type="button">
            Login
          </button></router-link
        >
      </form>
    </div>
  </div>
</template>
