// @ts-check
import { it, describe, expect } from '@jest/globals';
import { Validator } from '../src/validator.js';

describe('ObjectValidator', () => {
  describe('should validate nested structures', () => {
    it('an empty array', () => {
      const v = new Validator();

      const schema = v.object();

      schema.shape({
        name: v.string().required(),
        age: v.number().positive(),
      });

      expect(schema.isValid({ name: 'kolya', age: 100 })).toBeTruthy();
      expect(schema.isValid({ name: '', age: null })).toBeFalsy();
    });
  });
});
