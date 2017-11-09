import User from './users';
import Thing from './thing';

class userData {
    handleThings(getThings){
        new User().getData((items) => {
            let listOfThings = [];
            items.forEach((item) => {
                listOfThings.push(new Thing(item.login, item.avatar_url, 'User'));
            })
            getThings(listOfThings);
        })
    }
}

export default userData;