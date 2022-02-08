/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */

export class ArrayValidator {
  constructor() {
    this._isRequired = false;
    this._size = null;
  }

  required() {
    this._isRequired = true;
    return this;
  }

  sizeof(size) {
    if (typeof size === 'number') {
      this._size = size;
    }

    return this;
  }

  isValid(arr) {
    if (!Array.isArray(arr)) return false;

    if (this._size !== null && this._size !== arr.length) return false;

    return true;
  }
}
