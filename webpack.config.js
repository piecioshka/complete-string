'use strict';

var path = require('path');
var pkg = require('./package.json');
var author = pkg.author.name + ' <' + pkg.author.email + '> (' + pkg.author.url + ')';

module.exports = {
    mode: 'development',

    devtool: 'source-map',

    entry: './src/index.ts',

    resolve: {
        extensions: ['.ts', '.js']
    },

    output: {
        library: 'CompleteString',
        libraryTarget: 'umd',
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'string-replace-loader',
                        options: {
                            multiple: [
                                { search: '$AUTHOR$', replace: author },
                                { search: '$NAME$', replace: pkg.name },
                                { search: '$DESCRIPTION$', replace: pkg.description },
                                { search: '$VERSION$', replace: pkg.version },
                                { search: '$LICENSE$', replace: pkg.license }
                            ]
                        }
                    }
                ]
            }
        ]
    }
};
