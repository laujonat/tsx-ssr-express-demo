import React from "react";
import express from "express";
import path from "path";
import fs from "fs";
import App from "../app";
import { renderToString } from "react-dom/server";
import html from "./html";
import { ServerStyleSheet } from "styled-components";
import console = require("console");

enum Initials {
    data = "🐵🙈🙉🙊🐒"
}
const initi: keyof typeof Initials = "data";
const initData: string = Initials[initi];

const port: number = 8000;
const server: express.Application = express();

function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

server.use("/static", express.static(path.resolve(process.cwd(), "build/client")));

server.get("/", (req, res) => {
  // const data = prop(initData, "data");
  const data = initData;
  const sheet = new ServerStyleSheet();

  const app: string = renderToString(sheet.collectStyles(React.createElement(App, { data })));

  const styles = sheet.getStyleTags();

  const indexFile: string = path.resolve("src/assets", "index.html");

  fs.readFile(indexFile, "utf8", (err) => {
    if (err) {
      console.error("Oops!", err);
      throw err;
    }

    const staticHtml = html({ app, styles, data });
    return res.send(
      staticHtml
    );
  });
});

server.listen(port, () =>
  console.log(`Listening on port: ${port}`)
);
