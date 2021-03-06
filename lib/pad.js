/**
 * @license
 * Copyright (c) 2015 The expand.js authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */

const _pad         = require('lodash/pad'),
    assertArgument = require('./assertArgument'),
    isIndex        = require('./isIndex'),
    isString       = require('./isString'),
    isVoid         = require('./isVoid');

/**
 * Returns `string` padded on the left and right sides, if it's shorter than `length`.
 * Padding characters are truncated if they can't be evenly divided by `length`.
 *
 * ```js
 * XP.pad('abc', 8);
 * // => '  abc   '
 *
 * XP.pad('abc', 8, '_-');
 * // => '_-abc_-_'
 *
 * XP.pad('abc', 3);
 * // => 'abc'
 * ```
 *
 * @function pad
 * @since 1.0.0
 * @category string
 * @description Returns `string` padded on the left and right sides, if it's shorter than `length`
 * @source https://github.com/expandjs/expandjs/blog/master/lib/pad.js
 *
 * @param {string} [string = ""] The target string
 * @param {number} [length = 0] The padding length
 * @param {string} [chars = " "] The string used as padding
 * @returns {string} Returns the padded string
 */
module.exports = function pad(string, length, chars) {
    assertArgument(isVoid(string) || isString(string), 1, 'string');
    assertArgument(isVoid(length) || isIndex(length), 2, 'number');
    assertArgument(isVoid(chars) || isString(chars), 3, 'string');
    return _pad(string, length, chars);
};
