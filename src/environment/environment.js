const axios = require("axios");


export const dyneBackend = axios.create({
  baseURL: process.env.VUE_APP_DYNTUBE_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1bWFpckBuZWFycGVlci5vcmciLCJqdGkiOiJjMTMzMzAwNS1iMzIwLTRmODUtYTc2NC03MDI1ZmM3MDhmYTMiLCJ1c2VySWQiOiI2MGE0Y2RjYzQ2MDhlNGM2NDJjMDc5YTIiLCJhY2NvdW50SWQiOiJFblZLcElqSTMwU205TXJSa1hBIiwiZXhwIjoyNTM0MDIzMDA4MDAsImlzcyI6Imh0dHBzOi8vZHludHViZS5jb20iLCJhdWQiOiJNYW5hZ2UifQ.4uO_lU-AFAX6NYAb6TV4N0SnanACkOhgGGZGx_KXk_0'

  }
});
