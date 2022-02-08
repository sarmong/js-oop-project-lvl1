// @ts-check
import { it, describe, expect } from '@jest/globals';
import { Validator } from '../src/validator.js';

describe('StringValidator', () => {
  describe('should validate', () => {
    it('an empty string', () => {
      const v = new Validator();

      const schema = v.string();

      expect(schema.isValid('')).toBeTruthy();
    });

    it('non empty string', () => {
      const v = new Validator();

      const schema = v.string();

      expect(schema.isValid('test')).toBeTruthy();
    });

    it('a required string', () => {
      const v = new Validator();

      const schema = v.string();

      schema.required();

      expect(schema.isValid('test')).toBeTruthy();
    });

    it('a string with minLength', () => {
      const v = new Validator();

      const schema = v.string();

      schema.minLength(1);

      expect(schema.isValid('test')).toBeTruthy();
    });

    it('a string containing a substring', () => {
      const v = new Validator();

      const schema = v.string();

      schema.contains('fox');

      expect(schema.isValid('the fox')).toBeTruthy();
    });

    it('a string containing multiple substrings', () => {
      const v = new Validator();

      const schema = v.string();

      schema.contains('fox');
      schema.contains('the');

      expect(schema.isValid('the fox')).toBeTruthy();
    });
  });

  describe('should not validate', () => {
    it('not a string', () => {
      const v = new Validator();

      const schema = v.string();

      expect(schema.isValid(3)).toBeFalsy();
    });

    it('an empty string with required', () => {
      const v = new Validator();

      const schema = v.string();
      schema.required();

      expect(schema.isValid('')).toBeFalsy();
    });

    it('string smaller than minLength', () => {
      const v = new Validator();

      const schema = v.string();
      schema.minLength(6);

      expect(schema.isValid('small')).toBeFalsy();
    });

    it('string not containing substring', () => {
      const v = new Validator();

      const schema = v.string();
      schema.contains('joe');

      expect(schema.isValid('john')).toBeFalsy();
    });

    it('string not containing one of substring', () => {
      const v = new Validator();

      const schema = v.string();
      schema.contains('joe');
      schema.contains('doe');

      expect(schema.isValid('john doe')).toBeFalsy();
    });
  });

  it('should be able to chain methods', () => {
    const v = new Validator();

    const schema = v
      .string()
      .required()
      .minLength(2)
      .contains('the')
      .contains('fox');

    expect(schema.isValid('what does the fox say')).toBeTruthy();
  });
});
