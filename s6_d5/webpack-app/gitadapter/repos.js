import axios from "axios";

const requestUrl = "https://api.github.com/search/repositories?q=bit-web";

class Repos {
    constructor() { }

    getRepos(notifyGetRepos) {
        axios.get(requestUrl).then((response) => {
            notifyGetRepos(response.data.items);
        });
    }
}

export default Repos;
