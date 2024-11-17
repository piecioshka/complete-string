/**
 * @author $AUTHOR$
 * @name $NAME$
 * @description $DESCRIPTION$
 * @version $VERSION$
 * @license $LICENSE$
 * @example
 * CompleteString.withChar(' batman', 10, 'a') // => 'aaa batman'
 * @example
 * const date = new Date();
 * CompleteString.withZero(date.getMonth(), 2) // => '05'
 */

"use strict";

/**
 * Check truly value. Otherwise throws error.
 */
function assert(
    condition: boolean,
    message: string | undefined
): asserts condition {
    if (!condition) {
        throw new Error(message);
    }
}

/**
 * Append a char to the left of the string.
 */
export const withChar = function (
    value: string,
    size: number,
    item: unknown
): string {
    // Cast to strings.
    const string = String(value);
    const length = Number(size);
    const char = String(item);

    if (string.length > length) {
        return string;
    }

    assert(char.length === 1, "CompleteString: char is not a single char.");

    const diff = length - string.length;
    const complement = new Array(diff + 1).join(char);

    return complement + string;
};

/**
 * Append zeros to the left of the string.
 */
export const withZero = function (value: string, size: number): string {
    return withChar(value, size, "0");
};
