class Thing {
    constructor(name, avatar, kind){
        this.name = name;
        this.avatar = avatar;
        this.kind = kind;
    }

    printThings() {
        console.log(`${this.kind}, Name: ${this.name}, avatar: ${this.avatar}`);
    }
}

export default Thing;