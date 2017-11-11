import Repo from './repos';
import Thing from './thing';

class repoData {
    handleThings(getThings) {
        new Repo().getRepos((items) => {
            const listOfThings = [];
            items.forEach((element) => {
                const name = element.name;
                const avatar = element.owner.avatar_url;
                const url = element.owner.html_url;
                listOfThings.push(new Thing(name, avatar, url));
            })
            getThings(listOfThings);
        })
    }
}

export default repoData;