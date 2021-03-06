/**
 * @license
 * Copyright (c) 2015 The expand.js authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */

const isArray = require('./isArray'),
    isObject  = require('./isObject');

/**
 * Checks if `value` is an instance of `Array` or `Object`.
 *
 * ```js
 * XP.isCollection([]);
 * // => true
 *
 * XP.isCollection([], true);
 * // => false
 *
 * XP.isCollection('abc');
 * // => false
 * ```
 *
 * @function isCollection
 * @since 1.0.0
 * @category tester
 * @description Checks if `value` is an instance of `Array` or `Object`
 * @source https://github.com/expandjs/expandjs/blog/master/lib/isCollection.js
 *
 * @param {*} value The target value
 * @param {boolean} [notEmpty] Specifies if `value` must be not empty
 * @returns {boolean} Returns `true` or `false` based on the check
 */
module.exports = function isCollection(value, notEmpty) {
    return isArray(value, notEmpty) || isObject(value, notEmpty);
};
