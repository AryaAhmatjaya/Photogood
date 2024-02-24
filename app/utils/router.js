import axios from "axios";

const client = axios.create({
  baseURL: "http://0.tcp.ap.ngrok.io:11131/api",
  params: {
    token: localStorage.getItem("token"),
  },
});

export default client;
