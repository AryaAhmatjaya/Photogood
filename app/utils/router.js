import axios from "axios";

const client = axios.create({
  baseURL: "http://192.168.100.17:8000/api",
  params: {
    token: localStorage.getItem("token"),
  },
});

export default client;
