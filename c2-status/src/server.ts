import app from "./app";
import http from "http";
import express from "express";

const router = express();
// const { PORT = 3303 } = process.env;
// const server = http.createServer(router);

const server = app.listen(app.get("port"), () => {
    console.log(
      "App is running on http://localhost:%d in %s mode",
      app.get("port"),
      app.get("env")
    );
  });
  
  export default server;