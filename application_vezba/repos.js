import axios from 'axios';

class Repo {
    getData(onFinish) {
        axios.get('https://api.github.com/search/repositories?q=bit-web')
            .then( (response) => {
                onFinish(response.data.items);
            })
            .catch( (error) => {
                console.log(error);
            })
    }
}

export default Repo;