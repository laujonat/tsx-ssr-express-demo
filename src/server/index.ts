import React from "react";
import express from "express";
import path from "path";
import fs from "fs";
import App from "../app";
import { renderToString } from "react-dom/server";
import html from "./html";

const port: number = 8000;
const server: express.Application = express();

server.use("/static", express.static(path.resolve(__dirname, "../build")));
server.get("/", (req, res) => {
  const body: string = renderToString(React.createElement(App));
 
  const initData: Object = { data: {
    0: "0", 1: "1", 2: "2"
  }};

  const indexFile: string = path.resolve("./dist/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Oops!", err);
      throw err;
    }

    const staticHtml = html({ body, initData });
    return res.send(
      staticHtml
    );
  });
});

server.listen(port, () =>
  console.log(`Listening on port: ${port}`)
);
