import express from "express";
import path from 'path';

const server = express();
const isProd = process.env.NODE_ENV === "production";

if (!isProd) {
  const webpack = require("webpack");
  const config = require('../../config/webpack.dev.js');
  const compiler = webpack(config);
  
  const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
  );
  
  const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);
  
  // const wbMidlleware = new webpackDevMiddleware();
  
  server.use(webpackDevMiddleware);
  server.use(webpackHotMiddleware);
}

const staticMiddleware = express.static("dist");
const PORT = process.env.PORT || 8080
server.use(staticMiddleware);
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
})