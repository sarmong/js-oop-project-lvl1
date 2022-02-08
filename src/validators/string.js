/* eslint-disable import/prefer-default-export */

export class StringValidator {
  _isRequired = false;
  _minLength = null;
  _substrings = [];

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

    return true;
  }
}
