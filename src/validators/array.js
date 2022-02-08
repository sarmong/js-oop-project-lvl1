/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */

export class ArrayValidator {
  constructor(customValidators) {
    this._isRequired = false;
    this._size = null;
    this._customValidators = customValidators;
    this._readyValidators = [];
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

    for (const validator of this._readyValidators) {
      if (!validator(arr)) return false;
    }

    return true;
  }

  test(name, value) {
    const validator = this._customValidators[name];

    this._readyValidators.push((matcher) => validator(matcher, value));

    return this;
  }
}
