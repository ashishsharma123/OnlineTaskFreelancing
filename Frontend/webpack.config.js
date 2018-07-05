const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

const getPlugins = (envName) => {
  if(envName === 'dev') {
    return  [
      new ExtractTextPlugin("bundle.css"),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("development")
      }),
    ]
  } else {
    [
      new ExtractTextPlugin("bundle.css"),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("production")
      }),
      new webpack.optimize.UglifyJsPlugin()
    ]
  }
  
}

module.exports = (env) => {
  console.log(env);
  return {
    entry: ["./src/index.js", "./src/styles/main.scss"],
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "./public/dist")
    },
    module: {
      rules: [
        {
          test: /\.scss/,
          loader: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: "eslint-loader",
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: "babel-loader",
          options: {
            presets: ["react", "stage-0", "es2015"],
            plugins: ["transform-class-properties", "transform-decorators-legacy"]
          }
        }
      ]
    },
    devServer: {
      contentBase: "./public/",
      watchContentBase: true
    },
    plugins: getPlugins(env.envName)
  }
};
