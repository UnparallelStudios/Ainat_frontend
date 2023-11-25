import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  tempdata: "",
  myResponseData: "",
  fooEvents: [],
  barEvents: [],
});

// "undefined" means the URL will be computed from the `window.location` object
const URL = "http://localhost:5000";

export const socket = io(URL);

socket.on("connect", () => {
  state.connected = true;
});

socket.on("my_response", (data) => {
  state.myResponseData = data["data"];
});

socket.on("disconnect", () => {
  state.connected = false;
});

socket.on("temp", (data) => {
  console.log("event received");
  state.tempdata = data["data"];
});
