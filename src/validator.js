/* eslint-disable no-underscore-dangle */
/* eslint-disable import/named */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
// @ts-check
import {
  StringValidator,
  NumberValidator,
  ArrayValidator,
  ObjectValidator,
} from './validators/index.js';

export class Validator {
  constructor() {
    this._customValidators = {
      string: {},
      number: {},
      array: {},
      object: {},
    };
  }

  string() {
    return new StringValidator(this._customValidators.string);
  }

  number() {
    return new NumberValidator(this._customValidators.number);
  }

  array() {
    return new ArrayValidator(this._customValidators.array);
  }

  object() {
    return new ObjectValidator(this._customValidators.object);
  }

  addValidator(type, name, fn) {
    this._customValidators[type][name] = fn;
  }
}
