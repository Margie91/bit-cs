'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var name = 'someone';

var message = 'Hello, ' + name + '.';

var Ivan = function () {
    function Ivan(sex, age) {
        _classCallCheck(this, Ivan);

        this.sex = sex;
        this.age = age;
        this.height = height;
    }

    _createClass(Ivan, [{
        key: 'getData',
        value: function getData() {
            console.log('How dare you assume my gender! I am ' + this.sex + '!');
        }
    }]);

    return Ivan;
}();

var ivy = new Ivan('binary', 33, 190);
ivy.getData();

console.log(message);
