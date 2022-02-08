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
  string() {
    return new StringValidator();
  }

  number() {
    return new NumberValidator();
  }

  array() {
    return new ArrayValidator();
  }

  object() {
    return new ObjectValidator();
  }
}
