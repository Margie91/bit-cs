class Thing {
    constructor(name, avatarUrl, url) {
        this._name = name;
        this._avatarUrl = avatarUrl;
        this._url = url; 
    }
    get name(){
        return this._name;
    }

    get avatar(){
        return this._avatarUrl;
    }

    get url() {
        return this._url;
    }

    getInfo() {
        console.log(`Name:${this._name}, url:${this._avatarUrl}`);
    }
}

export default Thing;