'use strict';

import { suite, it, expect } from 'vitest';

import { withChar, withZero } from './index';

suite('withChar', function () {
    it('should works', function () {
        expect(withChar).toEqual(expect.any(Function));
        expect(withChar('1', 2, 'x')).toEqual('x1');
        expect(withChar('11', 2, 'x')).toEqual('11');
    });

    it('should not work with bad params', function () {
        expect(function () {
            withChar('1', 2, 'xx');
        }).toThrow();

        expect(function () {
            withChar('111', 2, 'x')
        }).not.toThrow();
    });
});

suite('withZero', function () {
    it('withZero', function () {
        expect(withZero).toEqual(expect.any(Function));
        expect(withZero('1', 2)).toEqual('01');
    });
});
