const { inDev } = require('./webpack.helpers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  {
    // Typescript loader
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  },
  {
    // CSS Loader
    test: /\.css$/,
    use: [
      { loader: inDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
      { loader: 'css-loader' },
    ],
  },
  {
    // SCSS (SASS) Loader
    test: /\.s[ac]ss$/i,
    use: [
      { loader: inDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
      { loader: 'css-loader' },
      { loader: 'sass-loader' },
    ],
  },
  {
    // Less loader
    test: /\.less$/,
    use: [
      { loader: inDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
      { loader: 'css-loader' },
      { loader: 'less-loader' },
    ],
  },
  {
    // Assets loader
    // More information here https://webpack.js.org/guides/asset-modules/
    test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg|eot|ttf|woff|woff2)$/i,
    type: 'asset/resource',
    // generator: {
    //   filename: 'assets/images/[name][ext]',
    // },
  },

  //   {
  //     test: /\.(png|jpg)$/i,
  //     type: 'asset/resource',
  //     generator: {
  //         filename: 'images/[name]-[hash][ext]'
  //     }
  // }
  // {
  //   test: /\.(?:ico|webp|gif|png|jpg|jpeg|svg|)$/,
  //   type: 'asset/resource',
  //   generator: {
  //     filename: `${appFolder && `${appFolder}/`}assets/images/[name][ext]`,
  //   },
  // },
  {
    test: /\.mdx?$/,
    use: [
      {
        loader: '@mdx-js/loader',
        /** @type {import('@mdx-js/loader').Options} */
        options: {
          providerImportSource: '@mdx-js/react',
        },
      },
    ],
  },
];
