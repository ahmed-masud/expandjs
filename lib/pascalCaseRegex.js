/**
 * @license
 * Copyright (c) 2015 The expand.js authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */

/**
 * The pascal case validation regex.
 *
 * @object pascalCaseRegex
 * @since 1.0.0
 * @category regex
 * @description The pascal case validation regex
 */
module.exports = /^[A-Z]+([A-Z]*([a-z]|[\d](?![a-z]))*)+$|^$/;
