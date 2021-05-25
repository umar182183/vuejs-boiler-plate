const axios = require("axios");


export const dyneBackend = axios.create({
  baseURL: process.env.VUE_APP_DYNTUBE_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data"
  }
});
