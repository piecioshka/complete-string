(function (root) {
    'use strict';

    /**
     * Check truly value. Otherwise throws error.
     *
     * @param {boolean} cond
     * @param {string} [msg]
     */
    var assert = function (cond, msg) {
        if (!cond) {
            throw new Error(msg || 'Assertion Error');
        }
    };

    /**
     * Main module.
     *
     * @type {{withChar: Function, withZero: Function}}
     */
    var Complete = {

        /**
         * Method which add `appender` sign to `chars` that, result length of returns string is length passed by `length`.
         *
         * @param {string|number} string
         * @param {number} length
         * @param {string|number} char
         * @returns {string}
         *
         * @throw When `appender` is not a single char.
         * @throw When `chars` length is greater than limit length of results string.
         */
        withChar: function (string, length, char) {
            // Cast to strings.
            string = String(string);
            length = Number(length);
            char = String(char);

            assert(char.length === 1, 'Complete: `char` is not a single char.');
            assert(string.length <= length, 'Complete: `string` length is not less than result limit.');

            var diff = (length - string.length);
            var complement = (new Array(diff + 1)).join(char);

            return complement + string;
        },

        /**
         * Append chars passed in first param with `0` char.
         *
         * @param {string|number} string
         * @param {number} length
         * @returns {string}
         */
        withZero: function (string, length) {
            return this.withChar(string, length, '0');
        }

    };

    // Exports.

    if (typeof module === 'object' && module.exports) {
        // Support CommonJS modules.
        module.exports = Complete;

    } else if (typeof define === 'function' && define.amd) {
        // Support AMD
        define(Complete)

    } else {
        // Put to global namespace `Complete`.
        return (root.Complete = Complete);
    }

}(this));
