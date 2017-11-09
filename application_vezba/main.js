import userData from './adapterUser';
import repoData from './adapterRepo';

class Main {
    run() {
        new repoData().handleThings((things) => {
            things.forEach((things) => {
                things.printThings();
            })
        })
    }
}

let go = new Main;
go.run();