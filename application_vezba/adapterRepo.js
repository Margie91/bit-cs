import Repo from './repos';
import Thing from './thing';

class repoData {
    handleThings(getThings){
        new Repo().getData((items) => {
            let listOfThings = [];
            items.forEach((item) => {
                listOfThings.push(new Thing(item.name, item.owner.avatar_url, 'Repo'));
            })
            getThings(listOfThings);
        })
    }
}

export default repoData;