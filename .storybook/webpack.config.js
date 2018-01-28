const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'less-loader'],
                include: path.resolve(__dirname, '../src/component')
            }
        ]
    }
}