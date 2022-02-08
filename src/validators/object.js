/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */

export class ObjectValidator {
  constructor(customValidators) {
    this._shape = null;
    this._customValidators = customValidators;
    this._readyValidators = [];
  }

  shape(obj) {
    this._shape = obj;
    return this;
  }

  isValid(obj) {
    const shape = this._shape;
    for (const key in shape) {
      if (!shape[key]?.isValid(obj[key])) return false;
    }

    for (const validator of this._readyValidators) {
      if (!validator(obj)) return false;
    }

    return true;
  }

  test(name, value) {
    const validator = this._customValidators[name];

    this._readyValidators.push((matcher) => validator(matcher, value));

    return this;
  }
}
