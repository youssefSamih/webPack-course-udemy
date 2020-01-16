const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: {
    main: ["./src/main.js"],
    // ts: ["./src/index.ts"],
    polyfills: ["./src/angular-polyfills"],
    angular: ["./src/angular"]
  },
  resolve: {
    extensions: [".js", '.ts'],
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  devServer: {
    contentBase: "dist",
    overlay: true,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader"
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "awesome-typescript-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" }, 
          { 
            loader: "css-loader",
            query: {
              modules: true,
              modules: {
                localIdentName : "[name]--[local]--[hash:base64:8]"
              }
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.styl$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "stylus-loader" }
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name]-[hash:8].[ext]"
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pug-loader"
          }
        ]
      },
      {
        test: /\.hbs$/,
        use: [
          {
            loader: "handlebars-loader",
            query: {
              inlineRequires: "/images/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core/,
      path.join(__dirname, "./src"),
      {}
    ),
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      title: "Link's journal "
    })
  ]
}
