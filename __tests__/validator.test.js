// @ts-check
import { it, describe, expect } from '@jest/globals';
import { Validator } from '../src/validator.js';

describe('Custom Validator', () => {
  it('should create a custom validator', () => {
    const v = new Validator();

    const fn = (value, start) => value.startsWith(start);
    // Метод добавления новых валидаторов
    // addValidator(type, name, fn)
    v.addValidator('string', 'startWith', fn);
    const schema = v.string().test('startWith', 'H');
    expect(schema.isValid('exlet')).toBeFalsy();
    expect(schema.isValid('Hexlet')).toBeTruthy();
  });
});
