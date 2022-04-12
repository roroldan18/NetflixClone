const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  mode: "development",
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
        test: /\.(png|jpg|svg|jpeg|gif)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            }
          },
        ]
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

    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
  })

  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3006,
    open: true,
  }


};
