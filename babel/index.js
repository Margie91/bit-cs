let name = 'Ivan';

let message = `Hello, ${name}.`;

class Ivan {
    constructor(sex, age, height) {
        this.sex = sex;
        this.age = age;
        this.height = height;
    }

    get Sex() {
        return this.sex;
    }
    get Age() {
        return this.age;
    }
    get Height() {
        return this.height;
    }

    set Sex(value) {
        this.sex = value;
        console.log('The value has been changed.');
    }

    getData() {
        console.log(`How dare you assume my gender! My name is Ivan, I am ${this.age} years old and I am ${this.sex}!`);
    }
}

let ivy = new Ivan('binary', 33, 190);

ivy.getData();
ivy.Sex = 'male';
ivy.getData();

console.log(message);