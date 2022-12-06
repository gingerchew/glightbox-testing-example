import { describe, expect, test } from 'vitest';
import {
    isNumber,
    isFunction,
    isArrayLike,
    isArray,
    isString,
    isNil,
    isObject,
    hide,
    show,
    has,
    size
} from '../src/utils/helpers';

describe('Boolean Helpers', () => {
    test('isNumber', () => {
        expect(isNumber(1)).toBe(true);
        expect(isNumber(false)).toBe(false);
    });

    test('isFunction', () => {
        expect(isFunction(function () {})).toBe(true);
        expect(isFunction([])).toBe(false);
    });

    describe.todo('isNode - waiting on web environment');

    test('isArrayLike', () => {
        expect(isArrayLike({ length: 100 })).toBe(true);
        expect(isArrayLike({})).toBe(false || undefined);
    });

    test('isArray', () => {
        expect(isArray([])).toBe(true);
        expect(isArray({})).toBe(false);
    });

    test('isString', () => {
        expect(isString('')).toBe(true);
        expect(isString(0)).toBe(false);
    });

    test('isNil', () => {
        expect(isNil(null) && isNil(undefined)).toBe(true);
        expect(isNil(false)).toBe(false);
    });

    test('isObject', () => {
        expect(isObject({})).toBe(true);
        expect(isObject(null) || isObject(undefined)).toBe(false);
        expect(isObject(function() {})).toBe(false);
    });
});


describe('Style Helpers', () => {
    const element = {
        style: {
            display: 'block'
        }
    };
    test('hide', () => {
        hide(element);

        expect(element.style.display).toBe('none');
    });

    test('show', () => {
        show(element);

        expect(element.style.display).toBe('block');
    });

    describe.todo('injectAssets - waiting on web environment');
});

describe('Object Helpers', () => {
    const mockObject = {
        a: true,
    };

    test('has', () => {
        expect(has(mockObject, 'a')).toBe(true);
        expect(has(mockObject, 'b')).toBe(false);
    });

    test('size', () => {
        expect(size(mockObject)).toBe(1);
    });
});

describe('Capability Helpers', () => {
    describe.todo('isMobile - waiting on web environment');
    describe.todo('isTouch - waiting on web environment');
});