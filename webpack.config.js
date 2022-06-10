const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrebuildWebpackPlugin = require('prebuild-webpack-plugin');
const { FileListPlugin } = require('./utilities/plugins/fileListPlugin');
const CompileModulesListPlugin = require('./utilities/plugins/compileModulesListPlugin');

module.exports = {
    entry: path.resolve(__dirname, './src/app.js'),
    devtool: 'inline-source-map',
    mode: 'development',
    // watch: true,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
    },
    optimization: {
        runtimeChunk: 'single',
    },
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Tech Talk Webpack',
            template: 'src/index.html'
        }),
        new PrebuildWebpackPlugin({
            build: (compiler, compilation, matchedFiles) => {
                console.log("BUILD ----------------------------------------------------------------------------")
            },
        }),
        new CompileModulesListPlugin(),
        new FileListPlugin({
            outputFile: 'my-assets.md',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.dottemplate$/,
                use: [
                    'babel-loader',
                    'dotTemplate-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            
        ],
    },
    resolveLoader: {
        alias: {
          'dotTemplate-loader': path.resolve(__dirname, 'utilities/loaders/dotTemplate-Loader.js'),
        },
      },
  };
