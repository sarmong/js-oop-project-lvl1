/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */

export class ObjectValidator {
  constructor() {
    this._shape = null;
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

    return true;
  }
}
