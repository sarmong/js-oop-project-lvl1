/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */

export class StringValidator {
  constructor(customValidators) {
    this._isRequired = false;
    this._minLength = null;
    this._substrings = [];
    this._customValidators = customValidators;
    this._readyValidators = [];
  }

  required() {
    this._isRequired = true;
    return this;
  }

  contains(substr) {
    this._substrings.push(substr);
    return this;
  }

  minLength(length) {
    if (typeof length === 'number') {
      this._minLength = length;
    }

    return this;
  }

  isValid(str) {
    if (typeof str !== 'string') return false;

    if (this._isRequired && !str.length) return false;

    if (this._minLength !== null && str.length < this._minLength) return false;

    for (const substr of this._substrings) {
      if (!str.includes(substr)) return false;
    }

    for (const validator of this._readyValidators) {
      if (!validator(str)) return false;
    }

    return true;
  }

  test(name, value) {
    const validator = this._customValidators[name];

    this._readyValidators.push((matcher) => validator(matcher, value));

    return this;
  }
}
