const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const ModulefederationTypesPlugin =
  require("@cloudbeds/webpack-module-federation-types-plugin").ModuleFederationTypesPlugin;
const packageJson = require("./package.json");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProduction ? "production" : "development",
  entry: "./src/index.ts",
  output: {
    filename: isProduction ? "bundle.[contenthash].js" : "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: isProduction
      ? "https://creditos-siteempresasbanco.netlify.app/"
      : "http://localhost:3001/",
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fullySpecified: false,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "feCreditos",
      filename: "remoteEntry.js",
      exposes: {
        "./NavTabs": "./src/components/NavTabs",
        "./Loading": "./src/components/Loading",
        "./useLabelsStore": "./src/store/useLabelsStore.ts",
        "./App": "./src/App",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: packageJson.dependencies["react"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: packageJson.dependencies["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: packageJson.dependencies["react-router-dom"],
        },
        "react-pdf": {
          singleton: true,
          requiredVersion: packageJson.dependencies["react-pdf"],
        },
      },
    }),
    new ModulefederationTypesPlugin({
      dirDownloadedTypes: "src/types",
      dirEmittedTypes: "@types",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "public", to: "" }],
    }),
  ],
  devServer: {
    static: [
      {
        directory: path.join(__dirname, "public"),
        publicPath: "/",
      },
      {
        directory: path.join(__dirname, "dist"),
      },
    ],
    port: 3001,
    hot: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  devtool: isProduction ? "source-map" : "inline-source-map",
};
