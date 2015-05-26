'use strict';

jest.dontMock('../complete');

var Complete = require('../complete');

describe('Complete', function () {
    it('is ready', function () {
        expect(Complete).toMatch(jasmine.any(Object));
    });
});

describe('withChar', function () {
    it('should works', function () {
        expect(Complete.withChar).toMatch(jasmine.any(Function));
        expect(Complete.withChar('1', 2, 'x')).toEqual('x1');
        expect(Complete.withChar('11', 2, 'x')).toEqual('11');
    });

    it('should not work with bad params', function () {
        expect(function () {
            Complete.withChar('1', 2, 'xx');
        }).toThrow();

        expect(function () {
            Complete.withChar('111', 2, 'x')
        }).toThrow();
    });
});

describe('withZero', function () {
    it('withZero', function () {
        expect(Complete.withZero).toMatch(jasmine.any(Function));
        expect(Complete.withZero('1', 2)).toEqual('01');
    });
});
