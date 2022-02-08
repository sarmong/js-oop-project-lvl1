/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */

export class NumberValidator {
  constructor() {
    this._isRequired = false;
    this._isPositive = false;
    this._range = [-Infinity, Infinity];
  }

  required() {
    this._isRequired = true;
    return this;
  }

  positive() {
    this._isPositive = true;
    return this;
  }

  range(min, max) {
    if (typeof min === 'number' && typeof max === 'number') {
      this._range = [min, max];
    }

    return this;
  }

  isValid(num) {
    if (this._isRequired && typeof num !== 'number') return false;

    if (this._isPositive && num <= 0) return false;

    return num >= this._range[0] && num <= this._range[1];
  }
}
