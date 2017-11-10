var add = require('./appModule');

var chai = require('chai');

chai.should();

describe("addValue function", function () {
    describe("core functionality", function () {
        it('should return sum of two parameters', function () {
            var actual = add.addValues(3, 5);

            actual.should.equal(8);
        });
        it("should not return anything but the sum of two parameters", function () {
            var actual = add.addValues(3, 5);

            actual.should.not.equal(10);
        })
    })
})

describe('doSomethingVerySlow', function () {
    it('should return "done" when it is completed', function (completed) {
        add.doSomethingVerySlow(function (result) {
            result.should.equal("done");
            completed();
        })
    })
})