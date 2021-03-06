/**
 * @license
 * Copyright (c) 2015 The expand.js authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */

const isString = require('./isString');

/**
 * Checks if `value` is an invalid JS string.
 *
 * ```js
 * XP.isInvalidCode('let x = {');
 * // => true
 *
 * XP.isInvalidCode('let x = 1');
 * // => false
 * ```
 *
 * @function isInvalidCode
 * @since 1.0.0
 * @category tester
 * @description Checks if `value` is an invalid JS string
 * @source https://github.com/expandjs/expandjs/blog/master/lib/isInvalidCode.js
 *
 * @param {*} value The target value
 * @returns {boolean} Returns `true` or `false` based on the check
 */
module.exports = function isInvalidCode(value) {
    try { if (isString(value, true)) { new Function(value); } return false; } catch (err) { return true; }
};
