/**
 * @author $AUTHOR$
 * @name $NAME$
 * @description $DESCRIPTION$
 * @version $VERSION$
 * @license $LICENSE$
 * @example
 * CompleteString.withChar(' batman', 10, 'a') // => 'aaa batman'
 * @example
 * var date = new Date();
 * CompleteString.withZero(date.getMonth(), 2) // => '05'
 */

'use strict';

/**
 * Check truly value. Otherwise throws error.
 *
 * @param {boolean} cond
 * @param {string} message
 */
function assert(cond, message) {
    if (!cond) {
        throw new Error(message);
    }
}

/**
 * Main module.
 *
 * @type {{withChar: Function, withZero: Function}}
 */
var CompleteString = {

    /**
     * Method which add `appender` sign to `chars` that, result length of returns string is length passed by `length`.
     *
     * @param {string|number} string
     * @param {number} length
     * @param {string|number} char
     * @returns {string}
     *
     * @throw When `appender` is not a single char.
     */
    withChar: function (string, length, char) {
        // Cast to strings.
        string = String(string);
        length = Number(length);
        char = String(char);

        if (string.length > length) {
            return string;
        }

        assert(char.length === 1, 'CompleteString: char is not a single char.');

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

module.exports = CompleteString;
