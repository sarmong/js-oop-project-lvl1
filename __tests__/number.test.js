// @ts-check
import { it, describe, expect } from '@jest/globals';
import { Validator } from '../src/validator.js';

describe('NumberValidator', () => {
  describe('should validate', () => {
    it('null', () => {
      const v = new Validator();

      const schema = v.number();

      expect(schema.isValid(null)).toBeTruthy();
    });

    it('a zero', () => {
      const v = new Validator();

      const schema = v.number();

      expect(schema.isValid(0)).toBeTruthy();
    });

    it('a negative number', () => {
      const v = new Validator();

      const schema = v.number();

      expect(schema.isValid(-234)).toBeTruthy();
    });

    it('a required number', () => {
      const v = new Validator();

      const schema = v.number();

      schema.required();

      expect(schema.isValid(0)).toBeTruthy();
    });

    it('a positive number', () => {
      const v = new Validator();

      const schema = v.number();

      schema.positive();

      expect(schema.isValid(8)).toBeTruthy();
    });

    it('a number withing a range', () => {
      const v = new Validator();

      const schema = v.number();

      schema.range(-3, 1);

      expect(schema.isValid(0)).toBeTruthy();
    });
  });

  describe('should not validate', () => {
    it('not a number when required', () => {
      const v = new Validator();

      const schema = v.number();

      schema.required();

      expect(schema.isValid()).toBeFalsy();
    });

    it('a negative number when positive is on', () => {
      const v = new Validator();

      const schema = v.number();
      schema.positive();

      expect(schema.isValid(-2)).toBeFalsy();
    });

    it('a number out of range', () => {
      const v = new Validator();

      const schema = v.number();
      schema.range(-2, -1);

      expect(schema.isValid(3)).toBeFalsy();
    });
  });

  it('should be able to chain methods', () => {
    const v = new Validator();

    const schema = v.number().required().positive().range(1, 3);

    expect(schema.isValid(3)).toBeTruthy();
  });
});
