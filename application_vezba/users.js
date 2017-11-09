import axios from 'axios';

class User {
    getData(onFinish) {
        axios.get('https://api.github.com/search/users?q=margie')
            .then( (response) => {
                onFinish(response.data.items);
            })
            .catch( (error) => {
                console.log(error);
            })
    }
}

export default User;