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
      ? "https://utils-siteempresasbanco.netlify.app/"
      : "http://localhost:3002/",
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
      favicon: "./public/favicon.png",
      inject: "body",
      publicPath: isProduction
        ? "https://utils-siteempresasbanco.netlify.app/"
        : "http://localhost:3002/",
    }),
    new ModuleFederationPlugin({
      name: "feUtils",
      filename: "remoteEntry.js",
      exposes: {
        "./Error": "./src/components/Error",
        "./Loading": "./src/components/Loading",
        "./NavTabs": "./src/components/NavTabs",
        "./PdfPreview": "./src/components/PdfPreview",
        "./SquareCard": "./src/components/SquareCard",
        "./CardNavigator": "./src/components/CardNavigator",
        "./useExcelExport": "./src/hooks/useExcelExport",
        "./useLabelsStore": "./src/store/useLabelsStore.ts",
        "./HostedContext": "./src/context/HostedContext",
        "./styles": "./src/styles/App.css",
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
      patterns: [
        { from: "public", globOptions: { ignore: ["**/index.html"] } },
      ],
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
    port: 3002,
    hot: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  devtool: isProduction ? "source-map" : "inline-source-map",
};
