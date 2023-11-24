import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  myResponseData: "",
  fooEvents: [],
  barEvents: [],
});

// "undefined" means the URL will be computed from the `window.location` object
const URL = "ws://0.tcp.in.ngrok.io:19744";

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

socket.on("foo", (...args) => {
  state.fooEvents.push(args);
});

socket.on("bar", (...args) => {
  state.barEvents.push(args);
});
