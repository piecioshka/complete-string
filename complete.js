(function (root) {
    'use strict';

    // Private members.
    var assert;

    var Complete = {

        /**
         * Method which add `appender` sign to `chars` that, result length of returns string is length passed by `length`.
         *
         * @param {string|number} chars
         * @param {number} length
         * @param {string|number} appender
         * @returns {string}
         *
         * @throw When `appender` is not a single char.
         * @throw When `chars` length is greater than limit length of results string.
         */
        withChars: function (chars, length, appender) {
            // Cast to strings.
            chars = String(chars);
            length = Number(length);
            appender = String(appender);

            assert(appender.length === 1, 'Appender is not a single char.');
            assert(chars.length <= length, 'Chars length is not less than result limit.');

            var diff = (length - chars.length);
            var complement = (new Array(diff + 1)).join(appender);

            return complement + chars;
        },

        /**
         * Append chars passed in first param with `0` char.
         *
         * @param {string|number} chars
         * @param {number} length
         * @returns {string}
         */
        withZero: function (chars, length) {
            return this.withChars(chars, length, 0);
        }

    };

    // -----------------------------------------------------------------------------------------------------------------

    assert = function (cond, msg) {
        if (!cond) {
            throw new Error(msg || 'Assertion Error');
        }
    };
    
    // Returns `Complete`.
    return (root.Complete = Complete);
}(this));
