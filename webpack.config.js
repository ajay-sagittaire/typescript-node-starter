const path = require('path');
const fs = require('fs');
const TSLintPlugin = require('tslint-webpack-plugin');

const nodeModules = {};

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  }); 

module.exports = {
    entry: path.join(__dirname, '/src/server.ts'),
    mode: 'none',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'server.js',
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }, ],
    },
    plugins: [
        new TSLintPlugin({
            files: ['./src/**/*.ts']
        })
    ],
    externals: nodeModules,
};