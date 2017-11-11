import axios from 'axios';

const reposURL = "https://api.github.com/search/repositories?q=bit-web";

class Repo {
    getRepos(onFinish) {
        axios.get(reposURL)
        .then((results) => {
            console.log(results.data.items);
            onFinish(results.data.items);
        }).catch((error) => {
            throw new Error('Error!');
        });
    }
}


export default Repo;
