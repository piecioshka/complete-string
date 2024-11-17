'use strict';

const path = require('path');
const pkg = require('./package.json');
const author = pkg.author.name + ' <' + pkg.author.email + '> (' + pkg.author.url + ')';

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
        globalObject: 'this',
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
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
