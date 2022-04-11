const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [

      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },

      {
        test: /\.(mp4)$/,
        use: {
          loader: "file-loader",
          options: {
            name: 'assets/[hash].[ext]',
          }
        }
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
        ]

      },


      {
        test: /\.html%/,
        use: [
          'html-loader'
        ],
      },


      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url',
            options: {
                limit: 10000,
                mimetype : 'application/font-woff'
            }
          }
        ]
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url',
            options: {
                limit: 10000,
                mimetype : 'application/font-woff'
            }
          }
        ]
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url',
            options: {
                limit: 10000,
                mimetype : 'application/octet-stream'
            }
          }
        ]
        
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: ["file"],
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url',
            options: {
                limit: 10000,
                mimetype : 'image/svg+xml'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style!css?sourceMap'],
      },

      {
        test: /\.(png|jpg|jpeg|gif)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            }
          },
        ]
      },


    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
  }),
  new CleanWebpackPlugin(),

  ],
  optimization:{
    minimize: true,
    minimizer:[
        new CssMinimizerPlugin(),
        new TerserPlugin(),
    ]
}



};
