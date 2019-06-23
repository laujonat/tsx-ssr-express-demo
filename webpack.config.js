const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

// Code minification
// const TerserPlugin = require("terser-webpack-plugin");
// Webpack plugin that runs TypeScript type checker on a separate process.
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// Load modules contained in "paths" in tsconfig.json
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
// https://github.com/Roilan/react-server-boilerplate/blob/master/webpack.config.js
const isProduction = process.env.NODE_ENV === "production";
const minify = require("html-minifier").minify;
// Define custom loading logic without suffering the performance penalty that script-based resource loaders incur.
const PreloadWebpackPlugin = require("preload-webpack-plugin");
// Generate static HTML file on build
const HtmlWebpackPlugin = require("html-webpack-plugin");

const env = process.env.NODE_ENV;
const config = {
  mode: env || "development"
};

const commonPlugins = [
  new BundleAnalyzerPlugin({
    analyzerMode: "disabled",
    generateStatsFile: true,
    statsOptions: { source: false }
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new ForkTsCheckerWebpackPlugin()
];

const tsPaths = [
  new TsconfigPathsPlugin({
    baseUrl: "./",
    configFile: "./tsconfig.json"
  })
];

const productionPlugins = isProduction
  ? [
      new webpack.DefinePlugin({
        "process.env": { NODE_ENV: JSON.stringify("production") }
      })
    ]
  : [
      new webpack.DefinePlugin({
        "process.env": { NODE_ENV: JSON.stringify("development") },
        'global': {}, // bizarre lodash(?) webpack workaround
      })
    ];

const clientPlugins = isProduction
  ? productionPlugins.concat([new webpack.optimize.OccurrenceOrderPlugin()])
  : [];

/* Modules  */
const js = [
  {
    test: /\.json$/,
    type: "javascript/auto",
    loader: "json-loader"
  },
  {
    test: /\.(js|jsx)$/,
    exclude: [/node_modules/],
    use: {
      loader: "babel-loader",
      options: {
        presets: ["react", "env"],
        plugins: ["transform-class-properties"]
      }
    }
  },
  {
    test: /\.s(a|c)ss$/,
    exclude: /\.module.(s(a|c)ss)$/,
    loader: `style!css`
  }
];

const ts = {
  test: /\.(ts|tsx)?$/,
  exclude: [/node_modules/],
  loader: "ts-loader",
  options: {
    transpileOnly: true
  }
};

const mergedModules = js.concat(ts);

const serverConfig = {
  mode: config.mode,
  node: {
    global: true,
    fs: "empty"
  },
  target: "node",
  stats: {
    colors: true,
    errorDetails: true
  },
  devtool: "inline-source-map" /* Extract ts source maps from tsconfig. */,
  entry: {
    _sv: path.resolve(__dirname, "src/server/index.ts")
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[chunk].bundle.js",
    chunkFilename: "[id].[chunk].bundle.js",
    libraryTarget: "umd"
  },
  resolve: {
    plugins: tsPaths,
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
  },
  module: {
    rules: mergedModules
  },
  performance: {
    hints: "warning"
  },
  plugins: productionPlugins.concat(commonPlugins),
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all"
    }
  },
  externals: [
    nodeExternals({
      react: "React",
      "react-dom": "ReactDom"
    })
  ]
};

const clientConfig = {
  mode: config.mode,
  target: "web",
  node: {
    global: true,
    fs: "empty"
  },
  stats: {
    colors: true,
    errorDetails: true
  },
  entry: {
    _c: path.resolve(__dirname, "src/index.tsx")
  },
  output: {
    path: path.resolve(__dirname, "build/client"),
    filename: "[name].[chunk].bundle.js",
    chunkFilename: "[id].[chunk].bundle.js",
    libraryTarget: "umd"
  },
  performance: {
    hints: "warning"
  },
  module: {
    rules: mergedModules
  },
  plugins: clientPlugins,
  resolve: {
    plugins: tsPaths,
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        commons: {
          // code shared between chunks
          test: /node_modules/,
          name: "common",
          chunks: "initial"
        },
        vendor: {
            // sync + async chunks coming from /node_modules/
            test: /node_modules/,
            name: "vendor",
            chunks: "all"
          }
        },
      }
  }
};

module.exports = [serverConfig, clientConfig];

// minSize: 30000,
//   maxSize: 0,
//     minChunks: 1,
//       maxAsyncRequests: 5,
//         maxInitialRequests: 3,
//           automaticNameDelimiter: "~",
//             name: true,
//               cacheGroups: {
//   commons: {
//     test: /[\\/]node_modules[\\/]/,
//       name: "vendor",
//         chunks: "initial"
//   }
// }