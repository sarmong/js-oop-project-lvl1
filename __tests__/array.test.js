// @ts-check
import { it, describe, expect } from '@jest/globals';
import { Validator } from '../src/validator.js';

describe('ArrayValidator', () => {
  describe('should validate', () => {
    it('an empty array', () => {
      const v = new Validator();

      const schema = v.array();

      expect(schema.isValid([])).toBeTruthy();
    });

    it('an array with set size', () => {
      const v = new Validator();

      const schema = v.array();

      schema.sizeof(3);

      expect(schema.isValid([1, 2, 4])).toBeTruthy();
    });
  });

  describe('should not validate', () => {
    it('not an array', () => {
      const v = new Validator();

      const schema = v.array();

      expect(schema.isValid(null)).toBeFalsy();
    });

    it('an array of wrong size', () => {
      const v = new Validator();

      const schema = v.array();

      schema.sizeof(1);

      expect(schema.isValid(['1', '4'])).toBeFalsy();
    });
  });

  it('should be able to chain methods', () => {
    const v = new Validator();

    const schema = v.array().required().sizeof(4);

    expect(schema.isValid([1, 3, '4', 5])).toBeTruthy();
  });
});
