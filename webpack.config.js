var jade = require('jade-loader');

module.exports = {
    entry: {
        index: './src/index.jade'
    },
    output: {
        path: './',
        filename: '[name].html'
    },
    module: {
        loaders: [
            { test: /\.jade$/, loader: "jade" }
        ]
    }
};