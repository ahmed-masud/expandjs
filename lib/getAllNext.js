/**
 * @license
 * Copyright (c) 2015 The expand.js authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */

const assertArgument = require('./assertArgument'),
    toArray          = require('./toArray');

/**
 * Returns all the right siblings of the first occurrence of `value` in `array`.
 *
 * ```js
 * XP.getAllNext([1, 2, 3, 4, 5], 3);
 * // => [4, 5]
 *
 * XP.getAllNext([1, 2, 3, 4, 5], 5);
 * // => []
 *
 * XP.getAllNext([1, 2, 3, 4, 5], 6);
 * // => []
 * ```
 *
 * @function getAllNext
 * @since 1.0.0
 * @category array
 * @description Returns all the right siblings of the first occurrence of `value` in `array`
 * @source https://github.com/expandjs/expandjs/blog/master/lib/getAllNext.js
 *
 * @param {Array} array The target array
 * @param {*} value The value to be found
 * @returns {Array} Returns the array of right siblings
 */
module.exports = function getAllNext(array, value) {
    assertArgument(array = toArray(array), 1, 'ArrayLike');
    let i = array.indexOf(value);
    return i >= 0 ? array.slice(i + 1) : [];
};
