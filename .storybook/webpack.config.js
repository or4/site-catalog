
const paths = require('./paths');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  resolve: {
    extensions: [
      '.mjs',
      '.web.ts',
      '.ts',
      '.web.tsx',
      '.tsx',
      '.web.js',
      '.js',
      '.json',
      '.web.jsx',
      '.jsx',
    ],
    plugins: [
      // Prevents users from importing files from outside of src/ (or node_modules/).
      // This often causes confusion because we only process files within src/ with babel.
      // To fix this, we prevent you from importing files out of src/ -- if you'd like to,
      // please link the files into your node_modules/ and let module-resolution kick in.
      // Make sure your source files are compiled, as they will not be processed in any way.
      new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
      new TsconfigPathsPlugin({ configFile: paths.appTsConfig }),
    ]
  },
  module: {
    rules: [
     {
        test: /\.css$/,
        loaders: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              minimize: false,
              sourceMap: true
            }
          }
        ]
      },

      {
        test: /\.(js|jsx|mjs)$/,
        include: paths.appSrc,
        loader: require.resolve('babel-loader'),
        options: {

          compact: true,
        },
      },

      {
        test: /\.(ts|tsx)$/,
        include: paths.appSrc,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              // disable type checker - we will use it in fork plugin
              transpileOnly: true,
            },
          },
        ],
      },
      // {
      //   enforce: 'pre',
      //   test: /\.(ts|tsx)$/,
      //   loader: 'tslint-loader'
      // },
      // {
      //   test: /\.(ts|tsx)$/,
      //   loaders: ['awesome-typescript-loader']
      // },

      {
        test: /\.(eot|svg|jpg|png|ttf|otf|woff|woff2)$/,
        loader: 'file-loader'
      }
    ],
  },
};



